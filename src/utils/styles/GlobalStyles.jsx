import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  h1, h2, h2 > span, h3 {
    font-family: "Orbitron", sans-serif;
    
  }

  * {
    font-family: "IBM Plex Sans", sans-serif;
    cursor: none !important;
  }
  
`;

export default GlobalStyle;
