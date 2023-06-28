import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        & h2 {
            text-transform: uppercase;
        }
        background-color: ${({theme}) => theme.colors.dark};

        ::-webkit-scrollbar {
            width: 10px;

            ::hover {
                scale: 1.1;
            }
        }

        ::-webkit-scrollbar-track {
            background-color: rgba(29,42,69,1);
        }

        ::-webkit-scrollbar-thumb {
            background-color: #BFD7EA;
        }
    }
`