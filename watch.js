const fs = require('fs')
const { kissX, optimizeHTML, convertImages, copyAssets } = require('./index.js')
// const { exec } = require('child_process')

// Watch file changes and rebuild
fs.watch('./src/', { recursive: true }, (event, filename) => {
  console.log(`Detected ${event} in ${filename}`)
  kissX()
  // optimizeHTML()
  // convertImages()
  copyAssets()
})

// // Exec shell command
// fs.watch('./index.js', { recursive: true }, (event, filename) => {
//   console.log(`Runing npm run serve`)
//   exec('node index.js', (error, stdout, stderr) => {
//     if (error) return console.log(`error: ${error.message}`)
//     if (stderr) return console.log(`stderr: ${stderr}`)
//     console.log(`stdout: ${stdout}`)
//   })
//   console.log(`Listening on localhost:3000`)
// })

// //Watch file changes and rebuild
// fs.watch('./convertcss.js', { recursive: true }, (event, filename) => {
//   console.log(`Detected ${event} in ${filename}`)
//   exec('node convertcss.js', (error, stdout, stderr) => {
//     if (error) return console.log(`error: ${error.message}`)
//     if (stderr) return console.log(`stderr: ${stderr}`)
//     console.log(`stdout: ${stdout}`)
//   })
// })
