// import header from './components/header-x.html'
// import footer from './components/footer-x.html'

// document.onload = function () {
//   const test = (document.getElementById('root').innerHTML = 'TEST INJECT XXXX')

//   console.log(test)
//   // document.getElementById('root').innerHTML = '<h1>TEST INJECT XXXX</h1>'
// }

// console.log('OK')

import _ from 'lodash'
import './style.css'

function component() {
  const element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())

console.log('OKOK🎉')
