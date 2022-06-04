import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --purple: hsl(255 50% 50% / 100%);

    --purpleDark1: hsl(255 20% 15% / 100%);
    --purpleDark2: hsl(255 20% 20% / 100%);

    --purpleMedium: hsl(255 20% 30% / 100%);

    --purpleLight1: hsl(255 50% 90% / 100%);
    --purpleLight2: hsl(255 50% 70% / 100%);

    --grayLight: hsl(0 0% 95% / 100%);
    --grayMedium: hsl(0 0% 50% / 100%);
  }

  body {
    background-color: var(--purpleDark1);
    
    font-family: "Roboto", sans-serif;
    color: var(--grayLight);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      outline: none;
      
      font-family: inherit;
      color: inherit;
      letter-spacing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`
