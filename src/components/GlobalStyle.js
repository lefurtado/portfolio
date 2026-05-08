import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.name};
    }

    * {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 96px;
    }

    html, body {
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.font.sans};
        font-feature-settings: 'cv11', 'ss01', 'ss03';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        transition: background-color ${({ theme }) => theme.transition.base},
                    color ${({ theme }) => theme.transition.base};
    }

    body {
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({ theme }) => theme.font.display};
        font-weight: 600;
        letter-spacing: -0.02em;
        line-height: 1.1;
    }

    p {
        line-height: 1.6;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        font-family: inherit;
        cursor: pointer;
    }

    input, textarea {
        font-family: inherit;
    }

    ::selection {
        background: ${({ theme }) => theme.colors.accent};
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.bg};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.borderStrong};
        border-radius: 999px;

        &:hover {
            background: ${({ theme }) => theme.colors.accent};
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
