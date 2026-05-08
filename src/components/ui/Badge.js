import styled, { css, keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const pulse = keyframes`
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.4); }
`;

const variants = {
    publico: (theme) => css`
        color: ${theme.colors.success};
        background: ${theme.name === 'dark'
            ? 'rgba(0,224,184,0.10)'
            : 'rgba(0,184,148,0.10)'};
        border-color: ${theme.name === 'dark'
            ? 'rgba(0,224,184,0.30)'
            : 'rgba(0,184,148,0.30)'};
    `,
    interno: (theme) => css`
        color: ${theme.colors.accent};
        background: rgba(124, 92, 255, 0.10);
        border-color: rgba(124, 92, 255, 0.30);
    `,
    empresa: (theme) => css`
        color: #F5A524;
        background: rgba(245, 165, 36, 0.10);
        border-color: rgba(245, 165, 36, 0.30);
    `,
    em_dev: (theme) => css`
        color: ${theme.colors.textMuted};
        background: ${theme.colors.surfaceElevated};
        border-color: ${theme.colors.border};
    `,
};

const dotColor = {
    publico: (theme) => theme.colors.success,
    interno: (theme) => theme.colors.accent,
    empresa: () => '#F5A524',
    em_dev: (theme) => theme.colors.textMuted,
};

const Pill = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.10em;
    line-height: 1;
    white-space: nowrap;
    ${({ theme, $variant }) => variants[$variant]?.(theme)}
`;

const Dot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: ${({ theme, $variant }) => dotColor[$variant]?.(theme)};
    ${({ $variant }) =>
        $variant === 'em_dev' &&
        css`
            animation: ${pulse} 1.6s ease-in-out infinite;
        `}
`;

export function Badge({ variant }) {
    const { t } = useTranslation();
    return (
        <Pill $variant={variant}>
            <Dot $variant={variant} />
            {t(`projects.badges.${variant}`)}
        </Pill>
    );
}

export const BadgeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;
