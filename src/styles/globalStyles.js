import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', monospace;
        letter-spacing: .6px;
    }
`;
