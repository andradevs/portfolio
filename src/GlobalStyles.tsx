import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`



  body {
    margin:0;
  }

  *{
    box-sizing:border-box;
  }

  button {
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme['onPrimary']};
    background-color:${({ theme }) => theme['primary']};
    color:${({ theme }) => theme['onPrimary']};
    padding: 10px 30px;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }

  button.gradient{
    background:${({ theme }) => theme['gradient']};
    color:${({ theme }) => theme['onPrimary']};
    border:0;
  }

`;

export default GlobalStyles;
