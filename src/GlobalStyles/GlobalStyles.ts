import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    margin: 0 auto;
    padding: 0;
    max-width: 1280px;
    background: #141414;
    font-family: 'Space Grotesk';
    color: rgb(255, 255, 255, 0.9);
}

li {
    list-style: none;
}
a {
    color: rgb(255, 255, 255, 0.9);
    text-decoration: none;
}
button {
    border: none;
}
input {
    border: none;
    outline: none;
}

`;
export default GlobalStyle;
