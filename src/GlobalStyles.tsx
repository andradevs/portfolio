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
    transition:all 0.2s ease-in;
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
      transform: scale(1.02);
      box-shadow:0px 6px 4px rgba(0, 0, 0, 0.25);
      background: ${({ theme }) => theme['primary']} radial-gradient(circle, transparent 1%, ${({ theme }) =>
        theme['primary']} 1%) center/15000%;

    }

    &:active{
      transform:scale(1.0);
      background-color:#ccc;
      background-size: 100%;
      transition: background 0s;
    }

    /* &::after {
      content:"";
      background:radial-gradient(circle, #fff 25%,#fff 100%);
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      transform: scale(0);
      mix-blend-mode:screen;
      transition: all 1250ms ease-in;
      z-index:0;
    }

    &:active::after{
      transform: scale(1);

    } */

  }

  button.gradient{
    background:${({ theme }) => theme['gradient']};
    color:${({ theme }) => theme['onPrimary']};
    border:0;
  }

`;

export default GlobalStyles;
