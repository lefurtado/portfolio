import styled, { css } from 'styled-components';

const base = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.01em;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid transparent;
    cursor: pointer;
    transition: transform ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast},
                border-color ${({ theme }) => theme.transition.fast},
                box-shadow ${({ theme }) => theme.transition.fast};
    white-space: nowrap;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px) scale(0.97);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    ${({ $size }) =>
        $size === 'sm' &&
        css`
            padding: 10px 18px;
            font-size: 13px;
        `}
`;

const variants = css`
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};

    ${({ $variant, theme }) =>
        $variant === 'ghost' &&
        css`
            background: transparent;
            color: ${theme.colors.text};
            border-color: ${theme.colors.borderStrong};
            &:hover {
                background: ${theme.colors.surface};
                border-color: ${theme.colors.accent};
            }
        `}

    ${({ $variant, theme }) =>
        $variant === 'gradient' &&
        css`
            background: ${theme.accent.gradient};
            color: #fff;
            box-shadow: 0 8px 24px ${theme.colors.glow};
            position: relative;
            z-index: 1;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                background: ${theme.accent.gradientSecondary};
                opacity: 0;
                z-index: -1;
                transition: opacity ${theme.transition.base};
            }

            &:hover {
                box-shadow: 0 12px 32px ${theme.colors.glow};
                &::before {
                    opacity: 1;
                }
            }
        `}
`;

export const Button = styled.button`
    ${base}
    ${variants}
`;

export const ButtonLink = styled.a`
    ${base}
    ${variants}
`;
