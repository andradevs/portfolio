import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`



  body {
    margin:0;
    background-color:${({ theme }) => theme['primary']};
  }

  *{
    box-sizing:border-box;
  }

  button {
    position:relative;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme['onPrimary']};
    background-color:${({ theme }) => theme['primary']};
    color:${({ theme }) => theme['onPrimary']};
    padding: 10px 30px;
    cursor:pointer;
    /* transition:all 0.5s ease-in; */
    overflow:hidden;
    z-index:1;
    background-position:center;
    transition:background 0.8s;



    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;              

    &:hover{
      transform: scale(1.03);
      box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
      transition:box-shadow 0.2s ease-in, transform 0.2s ease-in;
      background: ${({ theme }) => theme['primary']} radial-gradient(circle, transparent 1%, ${({ theme }) =>
        theme['primary']} 1%) center/15000%;

    }

    &:active{
      transform:scale(1.0);
      background-color:#ccc;
      background-size: 100%;
      transition: background 0s;
    }

  }

  button.gradient{
    background:${({ theme }) => theme['gradient']};
    color:${({ theme }) => theme['onPrimary']};
    border:0;


    &:hover{
      background: ${({ theme }) => theme['gradient']} 
    }
  }

`;

export default GlobalStyles;
