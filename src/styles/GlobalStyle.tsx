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
    @media screen and (max-width: 800px){line-height: 1.4rem;
    font-size: 0.9rem;
    text-align: justify;}
    
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 600px) {
  html {
    font-size: 14px;
  }}
`;

export default GlobalStyle;
