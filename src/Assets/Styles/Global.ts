import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --purple: hsla(255, 50%, 50%, 100%);
    --purpleDark: hsla(255, 20%, 15%, 100%);
    --purpleMediumDark: hsla(255, 20%, 20%, 100%);
    --purpleMedium: hsla(255, 20%, 30%, 100%);
    --purpleMediumLight: hsla(255, 50%, 70%, 100%);
    --purpleLight: hsla(255, 50%, 90%, 100%);

    --grayLight: hsl(0, 0%, 95%, 100%);
    --grayMedium: hsl(0, 0%, 50%, 100%);

    --white: hsl(0, 0%, 100%, 100%);
    --white5: hsl(0, 0%, 100%, 5%);
  }

  body {
    background-color: var(--purpleDark);
    
    font-family: "Roboto", sans-serif;
    color: var(--grayLight);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      
      font-family: inherit;
    }

    a {
      text-decoration: none;
      color: inherit
    }
  }
`
