// Encapsulate code for interoparability with other script imports
// IMPORTANT THIS MAY CAUSE PERFORMANCE ISSUES!
function makeTemplate() {
  const template = document.createElement('template')
  template.innerHTML = `

    `
  return template
}

class Head extends HTMLElement {
  constructor() {
    super()
    const template = makeTemplate()

    // Append template with shadow DOM to DOM
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}
window.customElements.define('head-x', Head)
