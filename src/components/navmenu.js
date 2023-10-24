// Encapsulate code for interoparability with other script imports
// IMPORTANT THIS MAY CAUSE PERFORMANCE ISSUES!
function makeTemplate() {
  const template = document.createElement('template')
  template.innerHTML = `
  <style>
  /****************************** HEADER ******************************/
  .header {
    overflow-x: hidden;

    /* Declare variables */
    /* Nav menu animation speed */
    --transision-time-out: 0.5s;
    --transision-time-in: 0.2s;
    /* Links */
    --nav-links-gap: 1rem;
  }
  svg {
    cursor: pointer;
    transition: 0.5s ease;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.5));
  }
  svg:hover {
    transition: 0.25s ease;
    filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 1));
  }

  /****************************** NAV MENU ******************************/
  .nav {
    overflow-x: hidden;
      }
      .nav__panel {
        position: fixed;
        top: 0;
        right: -100%;
        background: rgba(206, 206, 206, 0.507);
        transition: var(--transision-time-in) ease-out;
        width: 100%;
        height: 100%;
        padding: 8rem 0 0 0;
        z-index: 200;
        backdrop-filter: blur(2px);
        display: grid;
        grid-template: 1fr 5rem / 1fr;
        gap: var(--nav-links-gap);
        place-items: start center;
        overflow-y: auto;
      }
      .show-nav__panel {
        right: 0;
        transition: calc(var(--transision-time-out) / 1.5) ease;
      }
      .nav__panel__top {
        width: 100%;
        display: grid;
        place-items: center;
        place-content: center;
      }
      .nav__panel__bottom {
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
      }
      .nav__link {
        text-decoration: none;
      }
      .nav__svg {
        margin: 1rem;
        width: 3rem;
        height: 3rem;
      }
      /* .sun-svg { */
      /* display: none; */
      /* } */
      .moon-svg {
        display: none;
      }

      /* Navigation menu button animation */
      .nav__menu {
        position: fixed;
        top: 0;
        right: 0;
        display: grid;
        align-content: space-evenly;
        gap: 0.5rem;
        width: 3rem;
        height: 3rem;
        background: rgba(186, 186, 186, 0.377);
        margin: 1.5rem;
        padding: 0.6rem;
        border-radius: 30%;
        animation: menu-spin-back var(--transision-time-in) ease-in-out;
        animation-fill-mode: forwards;
        backdrop-filter: blur(2px);
        border: none;
        z-index: 300;
        cursor: pointer;
        transition: 0.5s ease; /* box shadow animation on hover*/
        filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.5));
      }
      .nav__menu:hover {
        transition: 0.5s ease;
        filter: drop-shadow(0 0 0.25rem rgba(255, 255, 255, 1));
      }
      @media (min-width: 600px) {
        .nav__panel {
          width: 25vw;
          border-radius: 5px 0 0 5px;
        }
      }
      .nav__menu__line {
        width: 100%;
        height: 0.3rem;
        /* background: var(--black); */
        background: #000;
        border-radius: 8px;
      }
      .nav__menu__line:nth-child(1) {
        transition: var(--transision-time-in);
        transform: rotate(0) translate(0);
      }
      .nav__menu__line:nth-child(2) {
        opacity: 1;
        transition: var(--transision-time-in);
        transform: rotate(0);
      }
      .nav__menu__line:nth-child(3) {
        transition: var(--transision-time-in);
        transform: rotate(0) translate(0);
      }
      .show-nav__menu .nav__menu__line:nth-child(1) {
        transition: var(--transision-time-out);
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
      }
      .show-nav__menu .nav__menu__line:nth-child(2) {
        opacity: 0;
        transition: var(--transision-time-out);
        transform: rotate(360deg);
      }
      .show-nav__menu .nav__menu__line:nth-child(3) {
        transition: var(--transision-time-out);
        transform: rotate(-45deg) translate(0.6rem, -0.65rem);
      }
      .show-nav__menu {
        animation: menu-spin var(--transision-time-out) cubic-bezier(0.8, -0.07, 0.05, 1.8);
        animation-fill-mode: forwards;
      }
      @keyframes menu-spin {
        0% {
          border-radius: 25%;
        }
        50% {
          border-radius: 100%;
        }
        100% {
          border-radius: 100%;
          transform: rotate(360deg);
        }
      }
      @keyframes menu-spin-back {
        0% {
          border-radius: 100%;
        }
        50% {
          border-radius: 50%;
        }
        100% {
          border-radius: 25%;
          transform: rotate(-180deg);
        }
      }
    </style>

    <header class="header" id="header">
      <nav class="nav">
        <button class="nav__menu" aria-label="Navigation menu">
          <div class="nav__menu__line"></div>
          <div class="nav__menu__line"></div>
          <div class="nav__menu__line"></div>
        </button>
        <div class="nav__panel">
          <div class="nav__panel__top">

            <a class="nav__link" href="/" aria-label="Home">
              <div class="svg nav__svg">
                <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h48v48H0z" />
                  <path
                    d="M6 26h2v14c0 2.206 1.794 4 4 4h24c2.206 0 4-1.794 4-4V26h2a2 2 0 0 0 1.414-3.414l-18-18a1.998 1.998 0 0 0-2.828 0l-18 18A2 2 0 0 0 6 26Zm14 14V30h8v10h-8Zm4-31.172 12 12V30l.002 10H32V30c0-2.206-1.794-4-4-4h-8c-2.206 0-4 1.794-4 4v10h-4V20.828l12-12Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </a>


            <a class="nav__link" href="/src/pages/freecodecamp.html" aria-label="freecodecamp">
              <div class="svg nav__svg">
                <svg width="48" height="48" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 84.76" style="enable-background:new 0 0 122.88 84.76" xml:space="preserve"><g><path d="M20.63,84.63c-2.13-0.51-5.22-3.19-8.64-7.5C5.04,68.39,1.27,58.58,0.16,46.36c-0.21-2.35-0.21-8.3,0-10.47 C1.18,25.63,4.77,16.8,11.36,8.34c2.02-2.59,5.36-5.98,6.96-7.06c2.27-1.53,3.69-1.65,5.06-0.44c0.56,0.5,0.69,0.73,0.76,1.36 c0.13,1.2-0.48,2.13-3.33,5.08c-3.98,4.11-5.82,6.41-7.86,9.79c-4.62,7.69-6.6,15.78-6.32,25.84c0.15,5.36,0.72,9.3,1.99,13.69 c1.14,3.95,2.5,7.14,4.55,10.62c2.05,3.49,3.78,5.7,7.23,9.25c3.03,3.12,3.78,4.2,3.78,5.44c0,1.24-0.87,2.35-2.1,2.69 C21.4,84.8,21.35,84.8,20.63,84.63L20.63,84.63L20.63,84.63z M100.57,84.68c-0.64-0.14-1.8-1.38-1.93-2.07 c-0.21-1.12,0.46-2.12,3.57-5.34c1.53-1.58,3.42-3.67,4.19-4.63c5.64-7.04,8.78-14.87,9.62-24.01c0.26-2.82,0.13-10.08-0.23-12.81 c-0.75-5.71-2.14-10.37-4.55-15.28c-2.3-4.7-4.69-8.03-8.71-12.18c-2.7-2.79-3.5-3.8-3.77-4.82c-0.27-0.99-0.07-1.73,0.67-2.57 c1.02-1.16,2.19-1.26,4.01-0.36c2.21,1.1,5.07,3.96,8.39,8.41c6.68,8.94,10.13,18.77,10.96,31.26c0.7,10.61-1.87,21.35-7.25,30.25 c-3.71,6.14-9.38,12.43-12.39,13.77C102.33,84.64,101.2,84.81,100.57,84.68L100.57,84.68L100.57,84.68z M33.85,78.21 c-1.81-0.55-2.85-2.35-2.42-4.17c0.27-1.12,1.4-2.28,2.49-2.55c1.1-0.28,58.23-0.28,59.33,0c1.13,0.29,2.24,1.44,2.49,2.59 c0.32,1.51-0.35,3.05-1.67,3.81l-0.7,0.4l-29.54,0.03C47.59,78.33,34.1,78.28,33.85,78.21L33.85,78.21z M56.35,64.32 c-5.49-2-10.05-5.88-12.39-10.55c-1.3-2.6-2.05-5.74-2.05-8.56c0-3.81,1.49-7.44,6.03-14.69c3.38-5.4,3.96-6.39,4.95-8.46 c1.32-2.76,1.76-4.4,1.79-6.72c0.03-2.21-0.31-3.53-1.32-5.24C52.63,8.88,51,7.05,50.34,6.7c-1.08-0.56-1.3-1.31-0.54-1.82 c1.21-0.79,4.52-0.29,7.56,1.15c3.44,1.63,5.97,3.97,7.62,7.03c1.27,2.36,1.78,4.18,2.65,9.35c0.96,5.74,1.91,7.57,3.82,7.35 c1.02-0.12,1.65-0.5,2.08-1.26c0.68-1.21,0.39-2.87-0.99-5.62c-1.13-2.25-1.06-2.92,0.26-2.57c0.68,0.18,2.91,2,4.44,3.63 c3.85,4.09,5.76,7.8,6.68,12.97c0.48,2.71,0.52,7.2,0.08,9.54c-0.55,2.96-1.67,5.75-3.26,8.14c-1.77,2.66-5.47,6.04-8.17,7.44 c-1.21,0.63-1.64,0.67-2.23,0.2c-0.74-0.58-0.58-0.99,1.05-2.73c2.46-2.61,3.72-4.47,4.45-6.57c1.12-3.25,0.56-7.77-1.32-10.65 c-0.78-1.19-1.92-2.25-2.44-2.25c-0.28,0-0.24,0.37,0.29,2.29c0.18,0.67,0.33,1.49,0.33,1.83c0,1.76-2.48,3.03-4.66,2.39 c-1.78-0.52-2.56-2.13-2.32-4.78c0.07-0.82,0.14-2.31,0.14-3.31c0.01-1.76,0-1.85-0.56-2.96c-1.09-2.15-3.61-4.36-4.96-4.36 c-0.58,0-0.63,0.04-0.63,0.47c0,0.29,0.16,0.62,0.43,0.86c1.4,1.31,1.67,4,0.63,6.37c-0.64,1.47-1.37,2.3-3.85,4.4 c-3.26,2.77-4.31,4.09-4.97,6.23c-0.3,0.99-0.33,1.39-0.25,3.21c0.14,3.05,0.76,5.07,2.21,7.21c1.11,1.64,2.42,2.68,4.19,3.34 c0.85,0.32,0.95,0.4,0.95,0.83c0,0.5-0.38,0.82-0.94,0.81C57.97,64.86,57.17,64.62,56.35,64.32L56.35,64.32L56.35,64.32z"/></g></svg>
                </svg>
              </div>
            </a>

            <a class="nav__link" href="/src/pages/guess_the_number.html" aria-label="Guess the Number Game">
              <div class="svg nav__svg">
                <svg width="48" height="48" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </a>

            <a class="nav__link" href="/src/pages/playground.html" aria-label="Playground">
              <div class="svg nav__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>



          </div>

          <div class="nav__panel__bottom">
            <div class="svg nav__svg language-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 16h40M24 46c12.15 0 22-9.85 22-22S36.15 2 24 2 2 11.85 2 24s9.85 22 22 22Zm0 0c6 0 8-10 8-22S30 2 24 2s-8 10-8 22 2 22 8 22ZM4 32h40H4Z"
                  stroke="#202020"
                  stroke-width="4"
                />
              </svg>
            </div>
            <div class="svg nav__svg sun-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 33a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0 3a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm0-36a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 1 1-3 0v-6A1.5 1.5 0 0 1 24 0Zm0 39a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 1 1-3 0v-6A1.5 1.5 0 0 1 24 39Zm24-15a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 1 1 0-3h6A1.5 1.5 0 0 1 48 24ZM9 24a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 1 1 0-3h6A1.5 1.5 0 0 1 9 24ZM40.971 7.029a1.5 1.5 0 0 1 0 2.121l-4.242 4.245a1.501 1.501 0 0 1-2.121-2.124l4.242-4.242a1.5 1.5 0 0 1 2.121 0ZM13.392 34.608a1.5 1.5 0 0 1 0 2.121L9.15 40.971a1.5 1.5 0 0 1-2.121-2.121l4.242-4.242a1.5 1.5 0 0 1 2.121 0Zm27.579 6.363a1.5 1.5 0 0 1-2.121 0l-4.242-4.242a1.5 1.5 0 0 1 2.121-2.121l4.242 4.242a1.5 1.5 0 0 1 0 2.121ZM13.392 13.395a1.5 1.5 0 0 1-2.121 0L7.029 9.15A1.5 1.5 0 1 1 9.15 7.029l4.242 4.242a1.5 1.5 0 0 1 0 2.124Z"
                  fill="#202020"
                />
              </svg>
            </div>
            <div class="svg nav__svg moon-svg">
              <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 3C13.5 3 4.5 10.5 4.5 22.5s9 21 21 21S45 34.5 45 27C28.5 37.5 10.5 19.5 21 3Z"
                  stroke="#202020"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
    `
  return template
}

class NavMenu extends HTMLElement {
  constructor() {
    super()
    const template = makeTemplate()

    // Append template with shadow DOM to DOM
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))

    /****************************** Navigation menu ******************************/
    const menu = shadow.querySelector('.nav__menu')
    const navLinks = shadow.querySelector('.nav__panel')
    const linkArr = shadow.querySelectorAll('.nav__link')
    const body = document.querySelector('body')

    function showMenu() {
      menu.classList.toggle('show-nav__menu')
      navLinks.classList.toggle('show-nav__panel')
      if (document.body.clientWidth < 600) {
        if (body.style.overflow === '') {
          body.style.overflow = 'hidden'
        } else {
          body.style.overflow = ''
        }
      }
    }

    menu.addEventListener('click', showMenu, false)

    linkArr.forEach((item) => {
      item.addEventListener('click', showMenu, false)
    })
  }
}
window.customElements.define('nav-menu-x', NavMenu)
