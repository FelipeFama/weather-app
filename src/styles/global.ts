import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
  font-size: 120%;
  background: #222;
  background-image: url('https://source.unsplash.com/1600x900/?landscape');
  margin: 0;
}
`;
