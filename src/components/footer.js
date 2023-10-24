// Encapsulate code for interoparability with other script imports
// IMPORTANT THIS MAY CAUSE PERFORMANCE ISSUES!
function makeTemplate() {
  const template = document.createElement('template')
  template.innerHTML = `
    <style>
      /****************************** FOOTER ******************************/
      p {
        text-align: center;
      }
      .svg {
        cursor: pointer;
        transition: 0.5s ease;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.5));
      }
      .svg:hover {
        transition: 0.25s ease;
        filter: drop-shadow(0 0 0.25rem rgba(255, 255, 255, 1));
      }
      .footer {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
      }
      .footer-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      .svg-footer {
        margin: 1rem;
        transition: 0.5s ease;
        filter: drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.25));
      }
      .footer-note{
        padding: 0 1rem;
      }
    </style>

    <footer class="footer" id="footer">
      <h2 id="contact">CONTACTS</h2>

      <div class="footer-container">
        <a href="mailto:it.temp4422@gmail.com" aria-label="Gmail">
          <div class="svg svg-footer js-scroll fade-in">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40 36h-4V18.5L24 26l-12-7.5V36H8V12h2.4L24 20.5 37.6 12H40v24Zm0-28H8c-2.22 0-4 1.78-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Z"
                fill="#CECECE"
              />
            </svg>
          </div>
        </a>

        <a href="https://github.com/webdev4422" aria-label="GitHub">
          <div class="svg svg-footer js-scroll fade-in-delay-2">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 0C10.74 0 0 10.74 0 24c0 10.62 6.87 19.59 16.41 22.77 1.2.21 1.65-.51 1.65-1.14 0-.57-.03-2.46-.03-4.47-6.03 1.11-7.59-1.47-8.07-2.82-.27-.69-1.44-2.82-2.46-3.39-.84-.45-2.04-1.56-.03-1.59 1.89-.03 3.24 1.74 3.69 2.46 2.16 3.63 5.61 2.61 6.99 1.98.21-1.56.84-2.61 1.53-3.21-5.34-.6-10.92-2.67-10.92-11.85 0-2.61.93-4.77 2.46-6.45-.24-.6-1.08-3.06.24-6.36 0 0 2.01-.63 6.6 2.46 1.92-.54 3.96-.81 6-.81s4.08.27 6 .81c4.59-3.12 6.6-2.46 6.6-2.46 1.32 3.3.48 5.76.24 6.36 1.53 1.68 2.46 3.81 2.46 6.45 0 9.21-5.61 11.25-10.95 11.85.87.75 1.62 2.19 1.62 4.44 0 3.21-.03 5.79-.03 6.6 0 .63.45 1.38 1.65 1.14A24.04 24.04 0 0 0 48 24C48 10.74 37.26 0 24 0Z"
                fill="#CECECE"
              />
            </svg>
          </div>
        </a>

        <a href="https://codepen.io/webdev4422" aria-label="CodePen">
          <div class="svg svg-footer js-scroll fade-in-delay-3">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.744.38a2.268 2.268 0 0 1 2.512 0L46.984 14.8A2.27 2.27 0 0 1 48 16.692v14.616c0 .76-.38 1.472-1.016 1.894l-21.728 14.42c-.76.504-1.75.504-2.512 0L1.016 33.2A2.272 2.272 0 0 1 0 31.308V16.692c0-.76.38-1.472 1.016-1.894L22.744.38Zm-18.2 20.546v6.116l4.576-3.08-4.576-3.036Zm8.674 5.756L6.36 31.296l15.368 10.2V32.33l-8.508-5.648h-.002Zm13.054 5.648v9.164l15.368-10.2-6.86-4.612-8.508 5.648Zm12.606-8.366 4.58 3.08v-6.12l-4.58 3.04Zm2.742-7.272-6.82 4.526-8.528-5.736V6.506L41.62 16.692ZM21.728 6.506v8.974l-8.526 5.736-6.822-4.524L21.728 6.506ZM24 19.43l-6.7 4.508 6.7 4.446 6.7-4.446L24 19.43Z"
                  fill="#CECECE"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>

        <a href="https://www.freecodecamp.org/webdev4422" aria-label="FreeCodeCamp">
          <div class="svg svg-footer js-scroll fade-in-delay-4">
            <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)">
                <path
                  d="M39.77 7.812c-.255.005-.502.09-.708.24-.16.16-.322.392-.322.626 0 .4.472.948 1.346 1.846 3.644 3.508 5.476 7.806 5.464 12.988-.014 5.734-1.94 10.34-5.688 13.908-.788.706-1.112 1.26-1.114 1.734 0 .232.16.474.32.706.191.186.44.3.706.324.868 0 2.08-1.024 3.666-3.018 3.084-3.78 4.48-7.956 4.558-13.648.072-5.694-1.714-9.554-5.206-13.54-1.26-1.424-2.306-2.164-3.022-2.166Zm-31.538.004c-.716 0-1.764.74-3.02 2.166-3.496 3.986-5.282 7.846-5.21 13.54.08 5.692 1.474 9.866 4.56 13.648 1.582 1.994 2.796 3.02 3.664 3.018.265-.023.514-.138.704-.324.16-.232.32-.474.32-.706 0-.474-.324-1.028-1.112-1.732-3.746-3.57-5.674-8.174-5.688-13.91-.012-5.182 1.82-9.48 5.464-12.988.874-.898 1.348-1.444 1.346-1.846 0-.234-.16-.466-.322-.626a1.242 1.242 0 0 0-.708-.24h.002Zm14.112 1.79s1.31 4.162-5.298 13.454c-6.312 8.866 2.09 14.3 2.864 14.772-.562-.36-4.002-3 .804-10.846.932-1.54 2.152-2.94 3.668-6.082 0 0 1.34 1.892.64 5.996-1.046 6.202 4.542 4.428 4.628 4.514 1.952 2.3-1.616 6.34-1.834 6.466-.216.122 10.192-6.26 2.798-15.87-.506.506-1.164 2.884-2.534 2.532-1.368-.348 4.25-6.988-5.736-14.936ZM19.91 37.832a.846.846 0 0 0 .076.048l-.076-.048Z"
                  fill="#CECECE"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>

      <div>
        <p class="footer-note">Built with Core Web Technologies, Google and Sincere Developer's Efforts :)</p>
      </div>
    </footer>
    `
  return template
}

class Footer extends HTMLElement {
  constructor() {
    super()
    const template = makeTemplate()

    // Append template with shadow DOM to DOM
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}
window.customElements.define('footer-x', Footer)
