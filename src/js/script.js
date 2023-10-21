const body = document.querySelector('body')

/****************************** Animation ******************************/
/* Animate items on scroll */
const root = document.querySelector('.root')
const scrollElements = document.querySelectorAll('.js-scroll')

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
}

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top
  return elementTop > (window.innerHeight || document.documentElement.clientHeight)
}

const displayScrollElement = (element) => {
  element.classList.add('scrolled')
}

const hideScrollElement = (element) => {
  element.classList.remove('scrolled')
}

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el)
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

// root.addEventListener('scroll', () => {
//   handleScrollAnimation()
// })

/*Increasing Performance with Throttle*/
var throttleTimer

const throttle = (callback, time) => {
  if (throttleTimer) return

  throttleTimer = true
  setTimeout(() => {
    callback()
    throttleTimer = false
  }, time)
}

body.addEventListener('scroll', () => {
  throttle(() => {
    handleScrollAnimation()
  }, 250)
})
