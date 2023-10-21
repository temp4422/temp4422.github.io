export default function typewriter() {
  console.log('OK')
  // // Create elements
  // const container = document.createElement('div')
  // container.setAttribute('id', 'typewriter-container')
  // const text = document.createElement('p')
  // text.setAttribute('id', 'typewriter')
  // text.setAttribute('data-wait', 1000)
  // text.setAttribute(
  //   'data-words',
  //   "['Вітання!', 'Greetings!', 'Les salutations!', 'Grüße!', 'Saluti!', '问候！', 'Приветствие!', '!سلام تحية', 'Saluto!', 'Salutació!', '!דְרִישַׁת שָׁלוֹם', 'Salom!', '¡Saludo!', 'ຊົມເຊີຍ!', '挨拶！', 'გამარჯობა!', 'Powitanie!', 'Beannacht!', 'Hilsen!', 'Hälsning!', 'Мэндчилгээ!', 'Pozdrav!', 'Üdvözlet!', 'Salut!', 'Sveikinu!', 'Salam!', 'Salutem!', 'تبریک!', 'Saudações!', 'Lep pozdrav!', 'S pozdravom!', 'Kwaziso!', 'Salaan!', 'Χαιρετισμός!', 'Salamlayıram!', 'Поздрав!', 'Aloha!', 'शुभकामना!', 'Kveðja!', 'Прывітанне!']"
  // )
  // container.append(text)

  const typewriter = `
  <div id="typewriter-container" style="width: max-content; height: max-content; margin: 10rem auto; font-size: 2rem;">
    <p
      id="typewriter"
      data-wait="1000"
      data-words="['Вітання!', 'Greetings!', 'Les salutations!', 'Grüße!', 'Saluti!', '问候！', 'Приветствие!', '!سلام تحية', 'Saluto!', 'Salutació!', '!דְרִישַׁת שָׁלוֹם', 'Salom!', '¡Saludo!', 'ຊົມເຊີຍ!', '挨拶！', 'გამარჯობა!', 'Powitanie!', 'Beannacht!', 'Hilsen!', 'Hälsning!', 'Мэндчилгээ!', 'Pozdrav!', 'Üdvözlet!', 'Salut!', 'Sveikinu!', 'Salam!', 'Salutem!', 'تبریک!', 'Saudações!', 'Lep pozdrav!', 'S pozdravom!', 'Kwaziso!', 'Salaan!', 'Χαιρετισμός!', 'Salamlayıram!', 'Поздрав!', 'Aloha!', 'शुभकामना!', 'Kveðja!', 'Прывітанне!']"
    >
      <span id="typewriter"></span>
    </p>
    <style id="cursor" type="text/css">
      #typewriter > span {border-right: 0.05em solid; animation: caret 1s steps(1) infinite;} @keyframes caret {50% {border-color: transparent;}}
    </style>
  </div>
  `
  // Append typewriter-container to root
  const root = document.querySelector('#root')
  // root.append(typewriter)
  root.insertAdjacentHTML('beforeend', typewriter)

  /****************************** Typewriter ******************************/
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement
      this.words = words
      this.txt = ''
      this.wordIndex = 0
      this.wait = parseInt(wait, 10)
      this.type()
      this.isDeleting = false
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length
      // Get full text of current word
      const fullTxt = this.words[current]

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span>${this.txt}</span>`
      // this.txtElement.innerHTML = `<span style="border-right: 0.05em solid; animation: caret 1s steps(1) infinite; @keyframes caret {50% {border-color: transparent;}}">${this.txt}</span>` // NOT WORK!

      // Initial Type Speed
      let typeSpeed = 200

      if (this.isDeleting) {
        typeSpeed /= 2.5
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait
        // Set delete to true
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        // Move to next word
        this.wordIndex++
        // Pause before start typing
        typeSpeed = this.wait
      }
      setTimeout(() => this.type(), typeSpeed)
    }
  }
  // Init App
  function init() {
    const txtElement = document.querySelector('#typewriter')
    const preWords = txtElement.getAttribute('data-words').replace(/'/gi, '"')
    const words = JSON.parse(preWords)
    const wait = txtElement.getAttribute('data-wait')

    // Add cursor
    // const cursor = document.createElement('style')
    // cursor.type = 'text/css'
    // cursor.innerHTML =
    //   '#typewriter > .txt {border-right: 0.05em solid; animation: caret 1s steps(1) infinite;} @keyframes caret {50% {border-color: transparent;}} '
    // document.body.appendChild(cursor)

    // Init TypeWriter
    new TypeWriter(txtElement, words, wait)
  }
  // setTimeout(() => init(), 2000)
  // init()
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', testTime())
  function testTime() {
    setTimeout(() => init(), 1500)
  }
}
