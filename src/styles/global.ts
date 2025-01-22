import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        min-height: 100vh;
    }


    button {
        all: unset;
         display: inline-block;
        transition: 0.2s ease-out;
        cursor: pointer;
    }

    input {
        border: none;
        outline: none;
    }

    a {
  text-decoration: none;
  color: inherit;
}
`;
