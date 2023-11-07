import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    margin:0;
    background-color:${({ theme }) => theme['primary']};
    /* overflow-x:hidden; */
  }

  *{
    box-sizing:border-box;
  }

`;

export default GlobalStyles;
