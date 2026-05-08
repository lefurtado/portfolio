import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${({ $align }) => ($align === 'center' ? 'center' : 'flex-start')};
    text-align: ${({ $align }) => ($align === 'center' ? 'center' : 'left')};
    gap: 12px;
    margin-bottom: 64px;
`;

const Label = styled.span`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.accentSecondary};
`;

const Title = styled.h2`
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    max-width: 720px;
`;

const Sub = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 16px;
    max-width: 560px;
`;

export function SectionHeader({ label, title, subtitle, align = 'left' }) {
    return (
        <Wrap $align={align}>
            {label && <Label>{label}</Label>}
            <Title>{title}</Title>
            {subtitle && <Sub>{subtitle}</Sub>}
        </Wrap>
    );
}
