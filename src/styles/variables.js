import { css } from "styled-components";

export const v = {
    headerHeight: "60px",
    smSpacing: `8px`,
    mdSpacing: `16px`,
    lgSpacing: `32px`,
    xlSpacing: `48px`,
    xxlSpacing: `64px`,
    borderRadius: "4px",
    boxShadow: `0 1px 1px rgba(0,0,0,0.15), 
    0 2px 2px rgba(0,0,0,0.15)`,
};

export const btnReset = css`
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
`;

export const s = {
    // 1460px = 91.25em
    xxl: "91.25em",
    // 1200px = 75em
    xl: "75em",
    // 1024px = 64em
    lg: "64em",
    // 768px = 48em
    md: "48em",
    // 600px = 37.5em
    sm: "37.5em",
};

export const sLookup = {
    // 1024px = 64em
    lg: 1024,
    // 768px = 48em
    md: 768,
    // 600px = 37.5em
    sm: 600,
};

export const b = {
    xxl: `(min-width: ${s.xxl})`,
    xl: `(min-width: ${s.xl})`,
    lg: `(min-width: ${s.lg})`,
    md: `(min-width: ${s.md})`,
    sm: `(min-width: ${s.sm})`,
};
