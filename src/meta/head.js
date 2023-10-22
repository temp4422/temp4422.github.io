const headContent = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /****************************** LAYOUT STYLES ******************************/
      /*
      // COLORS
        Main color - Mine Shaft (approx.) #202020

      // FONTS
        Marck Script
      */

      /****************************** GENERAL ******************************/
      /* @import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'); */
      @font-face {
        font-family: 'Marck Script';
        src: url('/src/fonts/Marck_Script/MarckScript-Regular.ttf') format('truetype');
      }

      :root {
        --black: #202020;
        --light-grey: #cecece;
        --dark-grey: #bababa;
      }

      /****************************** CSS RESET START ******************************/
      /* prettier-ignore */
      *, *::before, *::after {box-sizing: border-box; margin: 0; border: 0; padding: 0;}
      /* prettier-ignore */
      body {line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; font-family: sans-serif;}
      /* prettier-ignore */
      img, picture, video, canvas, svg {display: block; max-width: 100%;}
      /* prettier-ignore */
      input, button, textarea, select {font: inherit;}
      /* prettier-ignore */
      p, h1, h2, h3, h4, h5, h6 {overflow-wrap: break-word;}
      /****************************** CSS RESET END ******************************/

      body {
        overflow-x: hidden;
        font-family: 'Marck Script', cursive;
        font-size: 1.3rem;
        background: var(--black);
        color: var(--light-grey);
      }
      h1 {
        width: max-content;
        margin: 0 auto;
        padding: 2rem 0;
      }

      /* Scrollbar Styling */
      @media (min-width: 768px) {
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background-color: #303030;
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 10px;
          border-radius: 10px;
          background: #6d6d6d;
        }
      }
    </style>
  `
document.head.innerHTML += headContent
