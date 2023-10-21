// Web Component to be imported and used in HTML as '<typewriter-x></typewriter-x>' tag
// Import as <script src="/src/components/typewriter_web_component.js"></script>
// https://academind.com/tutorials/adding-web-components-to-any-app

const template = document.createElement('template')
template.innerHTML = `
  <div id="typewriter">
    <span id="word"></span>
    <span id="cursor"></span>
    <style>
      #typewriter {
        width: max-content; /* Set width to enable margin below */
        height: max-content;
        margin: 10rem auto;
        font-size: 2rem;
      }
      #cursor {
        border-right: 0.1em solid;
        animation: caret 1s steps(1) infinite;
      }
      @keyframes caret {
        50% {border-color: transparent;}
      }
    </style>
  </div>
  `

class Typewriter extends HTMLElement {
  constructor() {
    super()
    // Append template with shadow DOM to DOM
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))

    // Typewriter
    //prettier-ignore
    const data = ['Вітання!', 'Greetings!', 'Les salutations!', 'Grüße!', 'Saluti!', '问候！', 'Приветствие!', '!سلام تحية', 'Saluto!', 'Salutació!', '!דְרִישַׁת שָׁלוֹם', 'Salom!', '¡Saludo!', 'ຊົມເຊີຍ!', '挨拶！', 'გამარჯობა!', 'Powitanie!', 'Beannacht!', 'Hilsen!', 'Hälsning!', 'Мэндчилгээ!', 'Pozdrav!', 'Üdvözlet!', 'Salut!', 'Sveikinu!', 'Salam!', 'Salutem!', 'تبریک!', 'Saudações!', 'Lep pozdrav!', 'S pozdravom!', 'Kwaziso!', 'Salaan!', 'Χαιρετισμός!', 'Salamlayıram!', 'Поздрав!', 'Aloha!', 'शुभकामना!', 'Kveðja!', 'Прывітанне!']

    // Select span in html
    const word = shadow.querySelector('#word')

    let typeSpeed = 200
    let wait = 1000
    let isDeleting = false
    let currWord = 0
    let currChar = 0
    let tmpWord = ''
    let tmpChar = ''
    // Type function -> use recursion to call itself with different speed
    // Wait -> pause on words boundary
    function type(params) {
      let speed = typeSpeed // Reset speed on each iteration

      // Loop through array and print each character in temporal word
      if (!isDeleting) {
        tmpChar = data[currWord][currChar++]
        tmpWord += tmpChar
        word.innerHTML = tmpWord
      } else if (isDeleting) {
        speed = speed / 2.5
        tmpChar = data[currWord][currChar--]
        tmpWord = tmpWord.slice(0, -1)
        word.innerHTML = tmpWord
      }

      if (currChar === data[currWord].length) {
        speed = wait
        isDeleting = !isDeleting
      }

      if (isDeleting && currChar === 0) {
        speed = wait
        isDeleting = !isDeleting
        currWord++
      }

      if (data.length === currWord) {
        currWord = 0 // If rich end of array
      }

      setTimeout(() => type(), speed) // Call itself
    }
    // Delay before start execution after windows has been loaded
    window.onload = () => {
      setTimeout(() => type(), 2000)
    }
  }
}
window.customElements.define('typewriter-x', Typewriter) // Custom element name must include dash (-) in name
