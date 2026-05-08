import styled from 'styled-components';

export const NoiseOverlay = styled.div`
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: 1;
    opacity: ${({ theme }) => (theme.name === 'dark' ? 0.04 : 0.025)};
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
`;
