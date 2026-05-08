import styled from 'styled-components';

export const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.full};

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.accentSecondary};
        box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentSecondary};
    }
`;
