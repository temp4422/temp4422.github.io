// TODO: Add uglifyjs
const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify
const sharp = require('sharp')

console.log('⭐️ START BUILD ⭐️')

// Define source and destination directories, file extension, and tag files directory
const srcPages = './src/pages/'
const srcComponents = './src/components/'
const srcAssets = './src/assets/'
const srcAssetsImg = './src/assets/img/jpg/'
const dist = './docs/'
const distAssets = './docs/assets/'
const distAssetsImg = './docs/assets/img/'

// Create dir if it doesnt exists
if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true })
}

/* ************************************************************************************** */
//
// KISS-x framework main job. Replace special tags with corresponding content
//
/* ************************************************************************************** */
function main() {
  // Start replacing
  console.log(`Start replacing corresponding tags for all pages in ${srcPages} 🔨`)

  // Read and replace tags in a given HTML file
  function replaceTagsInFile(srcPath, distPath) {
    let htmlContent = fs.readFileSync(srcPath, 'utf-8')
    const tagRegex = /<(\w+-x) \/>/g

    const matches = htmlContent.match(tagRegex)
    if (matches) {
      matches.forEach((match) => {
        const tagName = match.match(/\w+-x/)[0]
        const fileName = `${tagName}.html`
        const filePath = path.join(srcComponents, fileName)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        htmlContent = htmlContent.replace(match, fileContent)
      })
      fs.writeFileSync(distPath, htmlContent, 'utf-8')
    }
  }

  // Get a list of all HTML files in the source directory
  const htmlFiles = fs.readdirSync(srcPages).filter((file) => path.extname(file) === '.html')

  // Process each HTML file
  htmlFiles.forEach((fileName) => {
    const srcFilePath = path.join(srcPages, fileName)
    const distFilePath = path.join(dist, fileName)
    replaceTagsInFile(srcFilePath, distFilePath)
    console.log(`Replaced tags in ${fileName} and saved to dist directory.`)
  })

  console.log(`Tags replaced in all HTML pages and saved to the ${dist} directory. 👍 \n`)
}
main()

/* ************************************************************************************** */
//
// Optimize HTML
//
/* ************************************************************************************** */
function optimizeHTML() {
  // Start optimization
  console.log(`Start optimization all pages in ${dist} 🔨`)

  // Optimize HTML in a given file
  function optimizeHtmlFile(filePath) {
    let htmlContent = fs.readFileSync(filePath, 'utf-8')
    const minifiedHtml = minify(htmlContent, {
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
    })
    fs.writeFileSync(filePath, minifiedHtml, 'utf-8')
  }

  // Get a list of all HTML files in the dist directory
  const distFiles = fs.readdirSync(dist).filter((file) => path.extname(file) === '.html')

  // Process each HTML file in the dist directory
  distFiles.forEach((fileName) => {
    const distFilePath = path.join(dist, fileName)
    optimizeHtmlFile(distFilePath)
    console.log(`Optimized ${fileName} in the dist directory.`)
  })

  console.log(`HTML optimization completed for all HTML files in the ${dist} directory. 👍 \n`)
}
optimizeHTML()

/* ************************************************************************************** */
//
// Convert images
//
/* ************************************************************************************** */
function convertImages() {
  // Start optimization of images
  console.log(`Start images conversion in ${srcAssetsImg} with sharp 🔨`)

  // Create dir if it doesnt exists
  if (!fs.existsSync(distAssetsImg)) {
    fs.mkdirSync(distAssetsImg, { recursive: true })
  }

  // List all files in the source directory
  const files = fs.readdirSync(srcAssetsImg)

  // Process each image file
  files.forEach((file) => {
    const sourceFilePath = path.join(srcAssetsImg, file)

    // Check if the file is a JPG or PNG
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const outputFilePath = path.join(distAssetsImg, `${file.split('.')[0]}.webp`)

      try {
        sharp(sourceFilePath).toFormat('webp', { quality: 5 }).toFile(outputFilePath)

        console.log(`Converted ${file} to WebP.`)
      } catch (err) {
        console.error(`Error converting ${file} to WebP: ${err.message}`)
      }
    }
  })

  console.log(`Image conversion completed in ${distAssetsImg} 👍\n`)
}
convertImages()

/* ************************************************************************************** */
//
// Copy assets
//
/* ************************************************************************************** */
function copyAssets(params) {
  // Copy other assets
  console.log(`Copy other assets from ${srcAssets} to ${distAssets} dir  🔨`)

  try {
    fs.copyFileSync(`${srcAssets}head/favicon.ico`, `${distAssets}favicon.ico`)
    fs.copyFileSync(
      `${srcAssets}fonts/Marck_Script/MarckScript-Regular.ttf`,
      `${distAssets}MarckScript-Regular.ttf`
    )
    fs.copyFileSync(`${srcAssets}3d/x-drive.glb`, `${distAssets}x-drive.glb`)
    fs.copyFileSync(`${srcAssets}modules/model-viewer.min.js`, `${distAssets}model-viewer.min.js`)
    fs.copyFileSync(`${srcAssets}img/svg-sprite/sprite.svg`, `${distAssets}sprite.svg`)
    fs.copyFileSync(`${srcAssets}img/svg-sprite/brands.svg`, `${distAssets}brands.svg`)
    fs.copyFileSync(`${srcAssets}img/svg-sprite/simple-svg.svg`, `${distAssets}simple-svg.svg`)
    fs.copyFileSync(
      `${srcAssets}fontawesome-free-6.4.2-web/css/all.min.css`,
      `${distAssets}fontawesome.min.css`
    )
    fs.copyFileSync(
      `${srcAssets}fontawesome-free-6.4.2-web/sprites/regular.svg`,
      `${distAssets}regular.svg`
    )
    fs.copyFileSync(`${srcAssets}fonts/ashcan-bb/ashcanbb_reg.ttf`, `${distAssets}ashcanbb_reg.ttf`)
    fs.copyFileSync(`${srcAssets}fonts/vtks-hunt/Vtks-Hunt.ttf`, `${distAssets}Vtks-Hunt.ttf`)
    fs.copyFileSync(
      `${srcAssets}fonts/google material-design-icons font/MaterialIcons-Regular.ttf`,
      `${distAssets}MaterialIcons-Regular.ttf`
    )
  } catch (err) {
    console.error(err)
  }
  console.log(`Finish copying 👍`)
}
copyAssets()

console.log('⭐️ END BUILD ⭐️\n🎉 🎉 🎉')
