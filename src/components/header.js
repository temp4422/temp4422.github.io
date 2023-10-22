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
        margin: 1rem;
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
        <button class="nav__menu">
          <div class="nav__menu__line"></div>
          <div class="nav__menu__line"></div>
          <div class="nav__menu__line"></div>
        </button>
        <div class="nav__panel">
          <div class="nav__panel__top">
            <a class="nav__link" href="/">
              <div class="svg nav__svg home-svg">
                <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h48v48H0z" />
                  <path
                    d="M6 26h2v14c0 2.206 1.794 4 4 4h24c2.206 0 4-1.794 4-4V26h2a2 2 0 0 0 1.414-3.414l-18-18a1.998 1.998 0 0 0-2.828 0l-18 18A2 2 0 0 0 6 26Zm14 14V30h8v10h-8Zm4-31.172 12 12V30l.002 10H32V30c0-2.206-1.794-4-4-4h-8c-2.206 0-4 1.794-4 4v10h-4V20.828l12-12Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </a>


            <!-- comment not used links -->
            <!-- <a class="nav__link" href="#works"><div class="svg nav__svg work-svg"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h48v48H0z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M34 14a6 6 0 0 0-6-6h-8a6 6 0 0 0-6 6h-2a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V20a6 6 0 0 0-6-6h-2Zm-6-2h-8a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2Zm-16 6h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V20a2 2 0 0 1 2-2Z" fill="#202020" /></svg></div></a><a class="nav__link" href="#about"><div class="svg nav__svg about-svg"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h48v48H0z" /><path d="M3 14.25A5.252 5.252 0 0 1 8.25 9h31.5A5.252 5.252 0 0 1 45 14.25v19.5A5.25 5.25 0 0 1 39.75 39H8.25A5.25 5.25 0 0 1 3 33.75v-19.5ZM8.25 12A2.25 2.25 0 0 0 6 14.25v19.5A2.25 2.25 0 0 0 8.25 36h31.5A2.25 2.25 0 0 0 42 33.75v-19.5A2.25 2.25 0 0 0 39.75 12H8.25Zm20.25 6a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 1 0 0-3h-9Zm0 9a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 1 0 0-3h-9Zm-12.717-3.858a4.07 4.07 0 1 0 0-8.141 4.07 4.07 0 0 0 0 8.141Zm-4.209 2.034A2.574 2.574 0 0 0 9 27.75a5.01 5.01 0 0 0 3.795 4.86l.159.042c1.86.465 3.801.465 5.658 0l.162-.039a5.01 5.01 0 0 0 3.795-4.86 2.573 2.573 0 0 0-2.574-2.577h-8.421Z" fill="#202020" /></svg></div></a><a class="nav__link" href="#contact"><div class="svg nav__svg contact-svg"><svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h8v6a2 2 0 0 0 2 2h1c.5 0 1-.2 1.4-.58L27.8 36H40a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8Zm0 4h32v24H26.16L20 38.16V32H8V8Zm16.38 3c-1.78 0-3.2.36-4.28 1.08-1.1.72-1.66 1.92-1.56 3.3h3.94c0-.56.2-.98.52-1.26.4-.28.84-.42 1.38-.42.62 0 1.16.16 1.52.52.36.34.54.78.54 1.38 0 .56-.16 1.06-.44 1.48-.34.44-.76.8-1.28 1.08-1.04.64-1.72 1.2-2.14 1.68C22.2 20.32 22 21 22 22h4c0-.56.1-1 .28-1.36.18-.34.52-.64 1.04-.94.92-.42 1.68-.98 2.26-1.7.58-.74.88-1.52.88-2.4 0-1.4-.54-2.52-1.62-3.36-1.08-.82-2.58-1.24-4.46-1.24ZM22 24v4h4v-4h-4Z" fill="#202020" /></svg></div></a> -->


            <a class="nav__link" href="/src/pages/playground.html">
              <div class="svg nav__svg play-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>

            <a class="nav__link" href="/src/pages/guess_the_number.html">
              <div class="svg nav__svg play-svg">
                <svg width="48" height="48" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.9 5.5C15.3 4.5 14.2 4 13 4H7c-1.2 0-2.3.5-2.9 1.5-2.3 3.5-2.8 8.8-1.2 9.9 1.6 1.1 5.2-3.7 7.1-3.7s5.4 4.8 7.1 3.7c1.6-1.1 1.1-6.4-1.2-9.9zM8 9H7v1H6V9H5V8h1V7h1v1h1v1zm5.4.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm1.9-2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"
                    fill="#202020"
                  />
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

class Header extends HTMLElement {
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
window.customElements.define('header-x', Header)
