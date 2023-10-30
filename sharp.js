const fs = require('fs')
const sharp = require('sharp')
const glob = require('glob')
const path = require('path')

const assetsDir = './src/assets/img/jpg'
const distDir = './docs/assets/img/'

// Create dir if it doesnt exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
  console.log('OK')
}

const folderPath = path.resolve(process.argv[2] || __dirname)
const imageExtensions = ['.png', '.jpg']
const outputFormats = ['webp', 'avif']

const convertImages = async () => {
  try {
    console.log(`Converting all images in ${folderPath}`)
    const files = await new Promise((resolve, reject) => {
      glob(`${folderPath}/**/*{${imageExtensions.join(',')}}`, (err, files) => {
        if (err) reject(err)
        else resolve(files)
      })
    })

    for (const file of files) {
      const fileExt = path.extname(file)
      if (imageExtensions.includes(fileExt)) {
        for (const outputFormat of outputFormats) {
          const outputFile = path.join(
            path.dirname(file),
            path.basename(file, fileExt) + '.' + outputFormat
          )
          await sharp(file).toFormat(outputFormat).toFile(outputFile)
          console.log(`${file} was converted to ${outputFile}`)
        }
      }
    }
  } catch (err) {
    console.error(err)
  }
}

convertImages()
