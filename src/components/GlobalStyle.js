import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'DM Sans', sans-serif;
        background-color: ${({theme}) => theme.colors.dark};
    }
`