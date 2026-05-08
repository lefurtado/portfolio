import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useThemeMode } from '../../hooks/useTheme';

const Btn = styled.button`
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    transition: border-color ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.borderStrong};
    }
`;

export function ThemeToggle() {
    const { mode, toggle } = useThemeMode();
    return (
        <Btn onClick={toggle} aria-label="Toggle theme">
            {mode === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
        </Btn>
    );
}
