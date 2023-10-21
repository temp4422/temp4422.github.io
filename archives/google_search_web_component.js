// https://academind.com/tutorials/adding-web-components-to-any-app
//search-result.js
//this is a Web Component, NOT a React,Vue or Angular component.

const template = document.createElement('template')
template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>The Google search result of your name is <a target="_blank" rel="noopener">here</a></p>
  </div>
`

class SearchResult extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector('a').href = ''
  }

  static get observedAttributes() {
    return ['name-attribute']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name-attribute') {
      this.shadowRoot.querySelector('a').href = `https://www.google.com/search?q=${newValue}`
    }
  }
}

window.customElements.define('search-result', SearchResult)
