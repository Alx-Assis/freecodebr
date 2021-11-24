import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:transparent;
  }
  body{
    display:flex;
    justify-content:center;
     height :100vh ;
  }
    `

export default GlobalStyles
