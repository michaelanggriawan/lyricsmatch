import { createGlobalStyle }from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Charm');
    body{
        margin: 0;
        font-family: 'Charm', cursive;
        background: #f4eade;
    }
`;

export {GlobalStyle};