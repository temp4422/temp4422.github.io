const fs = require('fs')

function convertCSS() {
  const srcFile = './test.html'
  const distFile = './dist/nav-menu-result.html'

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist', { recursive: true })
  }
  fs.copyFile(srcFile, distFile, (err) => {
    if (err) throw err
  })

  let content = fs.readFileSync(srcFile, 'utf-8')
  let changedContent = content // after all manipulations
  const regex = /\s\.([A-Za-z0-9_-]+)|'\.([A-Za-z0-9_-]+)/ // Search for class
  let hex = 'XXXXXXXXXXX'

  /*
   * 1. Search class
   */

  let classToReplace = content.match(regex)[0]
  // classToReplace = classToReplace.slice(2) // Remove '.'
  classToReplace = 'nav'
  // classToReplace = 'nav__panel'

  /*
   * 2. Replace all occurences of this class
   */

  const htmlRegex = new RegExp(`(?<=class=["'][^"']*)\\b${classToReplace}\\b`, 'g')
  const styleRegex = new RegExp(`(?<=\\.)${classToReplace}(?=[^\\w-])`, 'g')
  const scriptRegex = new RegExp(`(?<=classList.toggle.*["|'])\\b${classToReplace}\\b`, 'g')

  changedContent = changedContent.replace(htmlRegex, hex)
  changedContent = changedContent.replace(styleRegex, hex)
  changedContent = changedContent.replace(scriptRegex, hex)

  // changedContent = changedContent.replace(htmlRegex, (match) => match.replace(classToReplace, hex))

  fs.writeFileSync(distFile, changedContent, 'utf-8')
}
convertCSS()
