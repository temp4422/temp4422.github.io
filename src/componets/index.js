// Replace each tag with corresponding file content
const fs = require('fs')
const path = require('path')

// Read 'index2.html'
let indexContent = fs.readFileSync('index.html', 'utf-8')

// Define a regular expression to match any tag like <filename />
const tagRegex = /<(\w+-x) \/>/g

// Find all matching tags
const matches = indexContent.match(tagRegex)

if (matches) {
  // Loop through the matched tags
  matches.forEach((match) => {
    const tagName = match.match(/\w+-x/)[0]
    const fileName = `${tagName}.html`

    // Read the corresponding file
    const fileContent = fs.readFileSync(fileName, 'utf-8')

    // Replace the tag with the file content
    indexContent = indexContent.replace(match, fileContent)
  })
}

// Write the modified content back to 'index2.html'
fs.writeFileSync('index.html', indexContent, 'utf-8')

console.log('Replacement completed successfully.')
