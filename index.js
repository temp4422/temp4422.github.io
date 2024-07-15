// #region Prepare environment
console.log('⭐️ START BUILD ⭐️')

const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify
const sharp = require('sharp')

const crypto = require('crypto')
const uglifyjs = require('uglify-js')

// Define source and destination directories, file extension, and tag files directory

// const srcPages = './tmp/pages/' // TEST optimizeCSS
// const srcComponents = './tmp/components/' // TEST optimizeCSS

// To disable optimizeCSS() comment 2 lines below and uncomment next 2 lines.
// NOT WORK PROPERLY WITHIN <SCRIPT>
// const srcPages = './dist/pages/' // for optimizeCSS()
// const srcComponents = './dist/components/' // for optimizeCSS()

const srcPages = './src/pages/'
const srcComponents = './src/components/'
const src = './src/'
const srcAssets = './src/assets/'
const srcAssetsImg = './src/assets/img/jpg/'
const dist = './dist/'
const distAssets = './dist/assets/'
const distAssetsImg = './dist/assets/img/'

// Clean and create dirs
// fs.rmSync(dist, { recursive: true, force: true })
if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true })
if (!fs.existsSync(distAssets)) fs.mkdirSync(distAssets, { recursive: true })
// #endregion

// #region KISS-x framework
/* ************************************************************************************** */
// Replace special tags with corresponding content
function kissX() {
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
//#endregion

// #region Optimize HTML
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
// #endregion

// #region Optimize CSS
/* ************************************************************************************** */
function optimizeCSS() {
  const srcDir = './src/'
  const distDir = './dist/'

  console.log(`Start optimizeCSS in ${srcDir} 🔨`)

  function replaceClassesWithRandomNumbers(srcDir, distDir) {
    // Function to generate a random class name
    function generateRandomClassName() {
      return 'ks-' + crypto.randomBytes(2).toString('hex')
    }

    // Function to ensure a directory exists, creating it if needed
    function ensureDirectoryExists(directory) {
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
      }
    }

    // Function to process and modify an HTML file
    function processHTMLFile(file) {
      const html = fs.readFileSync(file, 'utf8')

      let uniqueClassMap = {}

      // Replace class names in HTML attributes
      const replacedContent = html.replace(
        /\bclass\s*=\s*["']([^"']*)["']/g,
        (match, classList) => {
          const classNames = classList.split(/\s+/)
          const replacedClassList = classNames.map((className) => {
            if (!uniqueClassMap[className]) {
              // Generate a random number for the class if not already generated
              const randomNumber = generateRandomClassName()
              uniqueClassMap[className] = randomNumber
            }
            return uniqueClassMap[className]
          })

          return `class="${replacedClassList.join(' ')}"`
        }
      )

      // Replace class names in <style></style> blocks
      const replacedStyleContent = replacedContent.replace(
        /<style>([\s\S]*?)<\/style>/g,
        (match, styleBlock) => {
          const replacedStyleBlock = styleBlock.replace(/\b([A-Za-z0-9_-]+)\b/g, (className) => {
            return uniqueClassMap[className] || className
          })

          return `<style>${replacedStyleBlock}</style>`
        }
      )

      // Replace class names in <script></script> blocks
      const replacedScriptContent = replacedStyleContent.replace(
        /<script>([\s\S]*?)<\/script>/g,
        (match, scriptBlock) => {
          const replacedScriptBlock = scriptBlock.replace(/\b([A-Za-z0-9_-]+)\b/g, (className) => {
            return uniqueClassMap[className] || className
          })

          return `<script>${replacedScriptBlock}</script>`
        }
      )

      // Save the modified HTML to the 'dist' directory
      const relativePath = path.relative(srcDir, file)
      const distFile = path.join(distDir, relativePath)
      ensureDirectoryExists(path.dirname(distFile))
      fs.writeFileSync(distFile, replacedScriptContent, 'utf-8')
    }

    // Function to process HTML files in a directory recursively
    function processHTMLFilesInDirectory(directory) {
      const files = fs.readdirSync(directory)
      files.forEach((file) => {
        const filePath = path.join(directory, file)
        if (fs.statSync(filePath).isDirectory()) {
          processHTMLFilesInDirectory(filePath) // Recurse into subdirectories
        } else if (file.endsWith('.html')) {
          processHTMLFile(filePath)
        }
      })
    }

    // Create the 'dist' directory if it doesn't exist
    ensureDirectoryExists(distDir)

    // Start processing HTML files in the 'src' directory
    processHTMLFilesInDirectory(srcDir)
  }
  console.log(`CSS optimization completed for all HTML files in the ${distDir} directory. 👍 \n`)

  replaceClassesWithRandomNumbers(srcDir, distDir)
}
// #endregion

// #region Optimize JS
/* ************************************************************************************** */
function optimizeJS() {
  // Start optimization
  console.log(`Start optimization JS for all files in ${dist} 🔨`)

  // Minify options https://github.com/mishoo/UglifyJS#minify-options
  const options = {
    toplevel: true,
  }

  // List all files in the source directory
  const files = fs.readdirSync(srcAssets)

  // Process each JavaScript file
  files.forEach((file) => {
    const sourceFilePath = path.join(srcAssets, file)

    // Check if the file is a JavaScript file (ends with .js)
    if (file.endsWith('.js')) {
      const outputFilePath = path.join(dist, file)

      try {
        const code = fs.readFileSync(sourceFilePath, 'utf-8')
        const minifiedCode = uglifyjs.minify(code, options)

        fs.writeFileSync(outputFilePath, minifiedCode.code, 'utf-8')

        console.log(`Optimized ${file}`)
      } catch (err) {
        console.error(`Error optimizing ${file}: ${err.message}`)
      }
    }
  })

  console.log(`JS optimization completed, output in ${dist} 👍 \n`)
}
// #endregion

// #region Convert images
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
// #endregion

// #region Copy assets
/* ************************************************************************************** */
function copyAssets() {
  // Copy other assets
  console.log(`Copy other assets from ${srcAssets} to ${distAssets} dir  🔨`)

  try {
    fs.copyFileSync(`${srcAssets}head/favicon.ico`, `${distAssets}favicon.ico`)
    fs.copyFileSync(
      `${srcAssets}fonts/Marck_Script/MarckScript-Regular.ttf`,
      `${distAssets}MarckScript-Regular.ttf`
    )
    fs.copyFileSync(`${srcAssets}3d/x-drive.glb`, `${distAssets}x-drive.glb`)
    // fs.copyFileSync(`${srcAssets}modules/model-viewer.min.js`, `${distAssets}model-viewer.min.js`)
    fs.cpSync(`${srcAssets}modules/`, `${distAssets}`, { recursive: true }) // Copy dir recursive
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
    // Add service worker
    fs.cpSync(`${srcAssets}sw/`, `${dist}`, { recursive: true }) // Copy dir recursive
    // Add .nojekyll to disable Jekyll and proper assets loading
    fs.openSync(`${dist}.nojekyll`, 'w')
  } catch (err) {
    console.error(err)
  }
  console.log(`Finish copying 👍`)
}
// #endregion

// #region Run all functions
/* ************************************************************************************** */
function main() {
  // optimizeCSS() // run before kiss-x() // WIP
  kissX()
  optimizeHTML()
  convertImages()
  copyAssets()
  // optimizeJS() // WIP
  // fs.rmSync('./dist/', { recursive: true, force: true })
}
main()

console.log('⭐️ END BUILD ⭐️\n🎉 🎉 🎉')

module.exports = { kissX, optimizeHTML, convertImages, copyAssets } // For development purpose import in watch.js
// #endregion
