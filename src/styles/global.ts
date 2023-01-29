import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background-color: #E5E5E5;
}

ul{
  list-style: none;
}

button:hover{
cursor: pointer;
}

`