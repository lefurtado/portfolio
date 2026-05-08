import styled from 'styled-components';

export const GradientText = styled.span`
    background: ${({ theme }) => theme.accent.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`;
