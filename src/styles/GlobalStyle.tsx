import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  html {
    font-size: 16px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: #fdfdfd;
    color: #333;
    line-height: 1.6;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyle;
