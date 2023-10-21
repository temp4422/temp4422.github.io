// Web Component to be imported and used in HTML as '<typewriter-x></typewriter-x>' tag
// Import as <script src="/src/components/typewriter_web_component.js"></script>
// https://academind.com/tutorials/adding-web-components-to-any-app

const template = document.createElement('template')
template.innerHTML = `
  <div id="typewriter">
    <span id="words"></span>
    <span id="cursor"></span>
    <style>
      #typewriter {
        width: max-content; /* Set width to enable margin below */
        height: max-content;
        margin: 10rem auto;
        font-size: 2rem;
      }
      #cursor {
        border-right: 0.05em solid;
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
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector('a').href = ''

    // Typewriter
    //prettier-ignore
    const words = ['Вітання!', 'Greetings!', 'Les salutations!', 'Grüße!', 'Saluti!', '问候！', 'Приветствие!', '!سلام تحية', 'Saluto!', 'Salutació!', '!דְרִישַׁת שָׁלוֹם', 'Salom!', '¡Saludo!', 'ຊົມເຊີຍ!', '挨拶！', 'გამარჯობა!', 'Powitanie!', 'Beannacht!', 'Hilsen!', 'Hälsning!', 'Мэндчилгээ!', 'Pozdrav!', 'Üdvözlet!', 'Salut!', 'Sveikinu!', 'Salam!', 'Salutem!', 'تبریک!', 'Saudações!', 'Lep pozdrav!', 'S pozdravom!', 'Kwaziso!', 'Salaan!', 'Χαιρετισμός!', 'Salamlayıram!', 'Поздрав!', 'Aloha!', 'शुभकामना!', 'Kveðja!', 'Прывітанне!']

    // const swords = this.shadowRoot.querySelector('#words')
    // console.log(swords)
    // swords.style.width = '50px'
    // swords.style.height = '50px'

    // swords.style.background = 'red'
  }
}
window.customElements.define('typewriter-x', Typewriter) // Custom element name must include dash (-) in name
