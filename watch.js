const fs = require('fs')
// prettier-ignore
const { kissX, optimizeHTML, convertImages, copyAssets, optimizeCSS, optimizeJS  } = require('./index.js')

// Watch file chages and rebuild
fs.watch('./src/', { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} in ${filename}`)

  kissX()
  // optimizeHTML()
  // convertImages()
  // copyAssets()
  // optimizeCSS()
  // optimizeJS()
})

// Exec shell command
// const { exec } = require('child_process')
// console.log(`Runing npm run serve`)
// exec('npm run serve', (error, stdout, stderr) => {
//   if (error) return console.log(`error: ${error.message}`)
//   if (stderr) return console.log(`stderr: ${stderr}`)
//   console.log(`stdout: ${stdout}`)
// })
// console.log(`Listening on localhost:3000`)
