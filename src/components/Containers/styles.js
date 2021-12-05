import styled from "styled-components";

export const SFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SFixedContainer = styled.div`
    max-width: ${({ size }) => (!size ? "initial" : `${size}px`)};
    width: 100%;
    margin: 0 auto;
`;
