import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrap = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 3px;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    position: relative;
`;

const Btn = styled.button`
    position: relative;
    z-index: 1;
    padding: 6px 12px;
    border: 0;
    background: transparent;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ $active, theme }) => ($active ? theme.colors.bg : theme.colors.textMuted)};
    transition: color ${({ theme }) => theme.transition.fast};
    cursor: pointer;
`;

const Pill = styled.div`
    position: absolute;
    top: 3px;
    bottom: 3px;
    width: calc(50% - 3px);
    background: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radius.full};
    z-index: 0;
    transition: transform ${({ theme }) => theme.transition.base};
    transform: ${({ $active }) => ($active === 'en' ? 'translateX(100%)' : 'translateX(0)')};
`;

export function LangToggle() {
    const { i18n } = useTranslation();
    const active = i18n.language?.startsWith('en') ? 'en' : 'pt';
    const set = (lng) => i18n.changeLanguage(lng);

    return (
        <Wrap>
            <Pill $active={active} />
            <Btn $active={active === 'pt'} onClick={() => set('pt')} aria-label="Português">
                PT
            </Btn>
            <Btn $active={active === 'en'} onClick={() => set('en')} aria-label="English">
                EN
            </Btn>
        </Wrap>
    );
}
