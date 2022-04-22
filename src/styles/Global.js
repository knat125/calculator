import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "SourceCodePro", Helvetica, Arial, sans-serif;
    src: url("../../fonts/SourceCodePro-Medium.woff") format("woff");
    font-style: normal;
    font-weight: 600;
    font-display: fallback;
  }
  }
  * {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    background: #FFFFFF;
    color: #111111;
    font-family: "SourceCodePro", Helvetica, Arial, sans-serif;
    font-weight: 600;
    margin: 0;
    transition: all 0.50s linear;
  }
  button {
    font-family: "SourceCodePro", Helvetica, Arial, sans-serif;
    font-weight: 600;
  }
  `

export default GlobalStyles;