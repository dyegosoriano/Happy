import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #EBF2F5;
    color: #FFF;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`
