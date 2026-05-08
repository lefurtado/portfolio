import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import { Button } from '../ui/Button';
import { scrollTo } from '../../hooks/scrollTo';

const Bar = styled.header`
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    width: calc(100% - 32px);
    max-width: 1100px;
`;

const Inner = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 16px 12px 20px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme, $scrolled }) =>
        $scrolled ? `${theme.colors.surface}E0` : `${theme.colors.surface}80`};
    border: 1px solid ${({ theme }) => theme.colors.border};
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    transition: background ${({ theme }) => theme.transition.base};
`;

const Logo = styled.a`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    & span {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const Links = styled.ul`
    display: none;
    gap: 4px;

    @media (min-width: 1024px) {
        display: flex;
    }
`;

const LinkItem = styled.li`
    & button {
        padding: 8px 14px;
        background: transparent;
        border: 0;
        color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.textMuted)};
        font-size: 13px;
        font-weight: 500;
        border-radius: ${({ theme }) => theme.radius.full};
        cursor: pointer;
        transition: color ${({ theme }) => theme.transition.fast},
                    background ${({ theme }) => theme.transition.fast};

        &:hover {
            color: ${({ theme }) => theme.colors.text};
            background: ${({ theme }) => theme.colors.surfaceElevated};
        }
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const HideOnMobile = styled.div`
    display: none;
    align-items: center;
    gap: 8px;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const HideOnDesktop = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const MobileMenuBtn = styled.button`
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
`;

const MobileSheet = styled.div`
    position: fixed;
    inset: 80px 16px auto 16px;
    z-index: 99;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    gap: 8px;

    & button {
        text-align: left;
        padding: 14px 16px;
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        border-radius: ${({ theme }) => theme.radius.md};

        &:hover {
            background: ${({ theme }) => theme.colors.surfaceElevated};
        }
    }
`;

const items = [
    { id: 'about', key: 'about' },
    { id: 'projects', key: 'projects' },
    { id: 'experience', key: 'experience' },
    { id: 'skills', key: 'skills' },
    { id: 'contact', key: 'contact' },
];

export function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('about');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                setScrolled(window.scrollY > 24);
                const offset = window.scrollY + 120;
                for (const it of [...items].reverse()) {
                    const el = document.getElementById(it.id);
                    if (el && el.offsetTop <= offset) {
                        setActive(it.id);
                        break;
                    }
                }
            });
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        scrollTo(`#${id}`);
    };

    return (
        <>
            <Bar>
                <Inner $scrolled={scrolled}>
                    <Logo onClick={() => go('hero')}>
                        LF<span>.</span>
                    </Logo>
                    <Links>
                        {items.map((it) => (
                            <LinkItem key={it.id} $active={active === it.id}>
                                <button onClick={() => go(it.id)}>{t(`nav.${it.key}`)}</button>
                            </LinkItem>
                        ))}
                    </Links>
                    <Right>
                        <HideOnMobile>
                            <LangToggle />
                            <ThemeToggle />
                        </HideOnMobile>
                        <Button $size="sm" onClick={() => go('contact')}>
                            {t('nav.cta')}
                        </Button>
                        <HideOnDesktop>
                            <MobileMenuBtn onClick={() => setOpen((o) => !o)} aria-label="Menu">
                                {open ? <FiX size={18} /> : <FiMenu size={18} />}
                            </MobileMenuBtn>
                        </HideOnDesktop>
                    </Right>
                </Inner>
            </Bar>
            {open && (
                <MobileSheet>
                    {items.map((it) => (
                        <button key={it.id} onClick={() => go(it.id)}>
                            {t(`nav.${it.key}`)}
                        </button>
                    ))}
                    <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                        <LangToggle />
                        <ThemeToggle />
                    </div>
                </MobileSheet>
            )}
        </>
    );
}
