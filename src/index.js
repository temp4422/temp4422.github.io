// Simple css import
// import _ from 'lodash'
// import './style1.css' // Simple css import to use inside html

// function component() {
//   const element = document.createElement('div')
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//   element.classList.add('hello')
//   return element
// }
// // document.body.appendChild(component())
// console.log('OKOK🎉')

// CSS modules example
import styles from './style.css'
// console.log(styles)

const element = document.querySelector('.element')
element.innerHTML = `<div class="${styles.page}">
     <p class="${styles.text}">CSS Modules Webpack</p>
   </div>`

// https://github.com/hulyak/css-module-webpack
// https://blog.logrocket.com/how-to-configure-css-modules-webpack/
