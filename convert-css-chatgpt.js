const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

function replaceClassesWithRandomNumbers(inputFilePath, outputFilePath) {
  const fileContent = fs.readFileSync(inputFilePath, 'utf-8')

  // Replace class names in HTML attributes
  const classRegex = /\bclass\s*=\s*["']([^"']*)["']/g

  let uniqueClassMap = {}

  // Replace each class in HTML attributes with a random number
  const replacedContent = fileContent.replace(classRegex, (match, classList) => {
    const classNames = classList.split(/\s+/)
    const replacedClassList = classNames.map((className) => {
      if (!uniqueClassMap[className]) {
        // Generate a random number for the class if not already generated
        const randomNumber = 'ks-' + crypto.randomBytes(4).toString('hex')
        uniqueClassMap[className] = randomNumber
      }
      return uniqueClassMap[className]
    })

    return `class="${replacedClassList.join(' ')}"`
  })

  // Replace class names in <style></style> blocks
  const styleRegex = /<style>([\s\S]*?)<\/style>/g
  const replacedStyleContent = replacedContent.replace(styleRegex, (match, styleBlock) => {
    const replacedStyleBlock = styleBlock.replace(/\b([A-Za-z0-9_-]+)\b/g, (className) => {
      return uniqueClassMap[className] || className
    })

    return `<style>${replacedStyleBlock}</style>`
  })

  // Replace class names in <script></script> blocks
  const scriptRegex = /<script>([\s\S]*?)<\/script>/g
  const replacedScriptContent = replacedStyleContent.replace(scriptRegex, (match, scriptBlock) => {
    const replacedScriptBlock = scriptBlock.replace(/\b([A-Za-z0-9_-]+)\b/g, (className) => {
      return uniqueClassMap[className] || className
    })

    return `<script>${replacedScriptBlock}</script>`
  })

  // Write the updated content to the output file
  fs.writeFileSync(outputFilePath, replacedScriptContent, 'utf-8')
}

// Example usage:
const srcFile = './src/components/navmenu-x.html'
const distFile = './dist/nav-menu-result.html'
replaceClassesWithRandomNumbers(srcFile, distFile)

console.log(`Classes replaced in ${distFile}`)
