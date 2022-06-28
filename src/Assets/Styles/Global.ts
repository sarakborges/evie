import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --accent: 255;
    --brightness: 100%;
    --math: +;

    --main: hsl(var(--accent) 50% 50% / 100%);
    
    --yellowLight: hsl(50 100% 50% / 100%);

    --redMedium: hsl(340 70% 50% / 100%);

    --mainDark1: hsl(var(--accent) 20% calc(var(--brightness) var(--math) 15%) / 100%);
    --mainDark2: hsl(var(--accent) 20% calc(var(--brightness) var(--math) 20%) / 100%);

    --mainMedium: hsl(var(--accent) 20% calc(var(--brightness) var(--math) 30%) / 100%);

    --mainLight1: hsl(var(--accent) 50% calc(var(--brightness) var(--math) 90%) / 100%);
    --mainLight2: hsl(var(--accent) 50% calc(var(--brightness) var(--math) 70%) / 100%);

    --grayLight: hsl(0 0% calc(var(--brightness) var(--math) 95%) / 100%);
    --grayMedium: hsl(0 0% 50% / 100%);
  }

  html{
    scrollbar-width: thin;
  }

  body {
    background-color: var(--mainDark1);
    
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
