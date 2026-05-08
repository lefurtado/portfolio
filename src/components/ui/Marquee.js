import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
`;

const Wrap = styled.div`
    overflow: hidden;
    width: 100%;
    mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`;

const Track = styled.div`
    display: flex;
    gap: 48px;
    width: max-content;
    animation: ${slide} ${({ $duration }) => $duration || 30}s linear infinite;
    animation-direction: ${({ $reverse }) => ($reverse ? 'reverse' : 'normal')};
`;

export function Marquee({ children, duration = 30, reverse = false }) {
    return (
        <Wrap>
            <Track $duration={duration} $reverse={reverse}>
                {children}
                {children}
            </Track>
        </Wrap>
    );
}
