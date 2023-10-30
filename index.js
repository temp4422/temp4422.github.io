const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify

// Define source and destination directories, file extension, and tag files directory
const srcDir = './src/pages/'
const distDir = './dist/'
const htmlFileExtension = '.html'
const componentsDir = './src/components/'

// Read and replace tags in a given HTML file
function replaceTagsInFile(srcPath, distPath) {
  let htmlContent = fs.readFileSync(srcPath, 'utf-8')
  const tagRegex = /<(\w+-x) \/>/g

  const matches = htmlContent.match(tagRegex)
  if (matches) {
    matches.forEach((match) => {
      const tagName = match.match(/\w+-x/)[0]
      const fileName = `${tagName}${htmlFileExtension}`
      const filePath = path.join(componentsDir, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      htmlContent = htmlContent.replace(match, fileContent)
    })
    fs.writeFileSync(distPath, htmlContent, 'utf-8')
  }
}

// Get a list of all HTML files in the source directory
const htmlFiles = fs.readdirSync(srcDir).filter((file) => path.extname(file) === htmlFileExtension)

// Process each HTML file
htmlFiles.forEach((fileName) => {
  const srcFilePath = path.join(srcDir, fileName)
  const distFilePath = path.join(distDir, fileName)
  replaceTagsInFile(srcFilePath, distFilePath)
  console.log(`Replaced tags in ${fileName} and saved to dist directory.`)
})

console.log('Tags replaced in all HTML pages and saved to the dist directory.')

// /* ************************************************************************************** */
// // Optimize HTML in a given file
// function optimizeHtmlFile(filePath) {
//   let htmlContent = fs.readFileSync(filePath, 'utf-8')
//   const minifiedHtml = minify(htmlContent, {
//     collapseWhitespace: true,
//     removeComments: true,
//     minifyJS: true,
//     minifyCSS: true,
//   })
//   fs.writeFileSync(filePath, minifiedHtml, 'utf-8')
// }

// // Get a list of all HTML files in the dist directory
// const distFiles = fs.readdirSync(distDir).filter((file) => path.extname(file) === htmlFileExtension)

// // Process each HTML file in the dist directory
// distFiles.forEach((fileName) => {
//   const distFilePath = path.join(distDir, fileName)
//   optimizeHtmlFile(distFilePath)
//   console.log(`Optimized ${fileName} in the dist directory.`)
// })

// console.log('HTML optimization completed for all HTML files in the dist directory.')
