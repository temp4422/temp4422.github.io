const fs = require('fs')

function convertCSS() {
  // const srcDir = './src/components/'
  // const distDir = './dist/components/'
  const srcFile = './test.html'
  const distFile = './dist/nav-menu-result.html'

  // try {
  //   fs.copyFileSync(srcFile, distFile)
  // } catch (error) {
  //   console.log(error)
  // }

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true })
  }
  fs.copyFile(srcFile, distFile, (err) => {
    if (err) throw err
  })

  let content = fs.readFileSync(srcFile, 'utf-8')

  const regex = /\s\.([A-Za-z0-9_-]+)|'\.([A-Za-z0-9_-]+)/
  let matchX = content.match(regex)[0]
  console.log(matchX)

  let changedContent = content

  fs.writeFileSync(distFile, changedContent)

  //   // Function to generate random class names
  //   function generateRandomClassName() {
  //     return 'ks-' + crypto.randomBytes(4).toString('hex')
  //   }
  //   // Function to ensure a directory exists, creating it if needed
  //   function ensureDirectoryExists(directory) {
  //     if (!fs.existsSync(directory)) {
  //       fs.mkdirSync(directory, { recursive: true })
  //     }
  //   }
  //   // Function to process and modify an HTML file
  //   function processHTMLFile(file) {
  //     const html = fs.readFileSync(file, 'utf8')
  //     // Replace CSS class names in <style> blocks
  //     const modifiedHTML = html.replace(/<style>[\s\S]*?<\/style>/g, (match) => {
  //       return match.replace(/\s\.([A-Za-z0-9_-]+)|'\.([A-Za-z0-9_-]+)/g, (classMatch, className) => {
  //         return ` .${generateRandomClassName()}`
  //       })
  //     })
  //     // Replace CSS class names in HTML attributes
  //     const updatedHTML = modifiedHTML.replace(/<[^>]*>/g, (match) => {
  //       return match.replace(/class=["']([^"']+)["']/g, (classMatch, classNames) => {
  //         const modifiedClassNames = classNames.split(' ').map((className) => {
  //           return generateRandomClassName()
  //         })
  //         return `class="${modifiedClassNames.join(' ')}"`
  //       })
  //     })
  //     // Replace class names in JS
  //     // TODO
  //     // Save the modified HTML to the 'dist' directory
  //     const relativePath = path.relative(srcDir, file)
  //     const distFile = path.join(distDir, relativePath)
  //     ensureDirectoryExists(path.dirname(distFile))
  //     fs.writeFileSync(distFile, updatedHTML)
  //   }
  //   // Function to process HTML files in a directory
  //   function processHTMLFilesInDirectory(directory) {
  //     const files = fs.readdirSync(directory)
  //     files.forEach((file) => {
  //       const filePath = path.join(directory, file)
  //       if (fs.statSync(filePath).isDirectory()) {
  //         processHTMLFilesInDirectory(filePath) // Recurse into subdirectories
  //       } else if (file.endsWith('.html')) {
  //         processHTMLFile(filePath)
  //       }
  //     })
  //   }
  //   // Create the 'dist' directory if it doesn't exist
  //   ensureDirectoryExists(distDir)
  //   // Start processing HTML files in the 'src' directory
  //   processHTMLFilesInDirectory(srcDir)
  //   console.log('HTML files processed and saved to the "dist" directory.')
}
convertCSS()
