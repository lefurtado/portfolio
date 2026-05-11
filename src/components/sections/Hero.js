import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Tag } from '../ui/Tag';
import { Button, ButtonLink } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { scrollTo } from '../../hooks/scrollTo';

const Wrap = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-top: 120px;
    padding-bottom: 80px;
`;

const Glow = styled.div`
    position: absolute;
    z-index: 0;
    width: 600px;
    height: 600px;
    border-radius: 999px;
    filter: blur(140px);
    opacity: 0.3;
    background: ${({ theme }) => theme.accent.gradient};
    top: -10%;
    left: -10%;
    pointer-events: none;
`;

const GlowAlt = styled.div`
    position: absolute;
    z-index: 0;
    width: 500px;
    height: 500px;
    border-radius: 999px;
    filter: blur(160px);
    opacity: 0.2;
    background: ${({ theme }) => theme.colors.accentSecondary};
    bottom: -15%;
    right: -10%;
    pointer-events: none;
`;

const Grid = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background-image:
        linear-gradient(${({ theme }) => theme.colors.border} 1px, transparent 1px),
        linear-gradient(90deg, ${({ theme }) => theme.colors.border} 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at center, #000 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, #000 0%, transparent 70%);
    opacity: 0.5;
    pointer-events: none;
`;

const Inner = styled(Container)`
    position: relative;
    z-index: 2;
`;

const Greet = styled.div`
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 14px;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    font-family: ${({ theme }) => theme.font.display};
    font-size: clamp(40px, 11vw, 128px);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 0.95;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 24px;
    max-width: 1000px;
    overflow-wrap: anywhere;
`;

const Roles = styled.div`
    font-size: clamp(18px, 4.5vw, 32px);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 32px;
    min-height: 1.2em;
    overflow-wrap: anywhere;

    & .Typewriter__cursor {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const Tagline = styled.p`
    font-size: clamp(15px, 4vw, 18px);
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 560px;
    margin-bottom: 40px;
    line-height: 1.6;
    overflow-wrap: anywhere;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
`;

const Socials = styled.div`
    display: flex;
    gap: 8px;
    margin-left: 12px;

    & a {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.textMuted};
        transition: color ${({ theme }) => theme.transition.fast},
                    border-color ${({ theme }) => theme.transition.fast},
                    transform ${({ theme }) => theme.transition.fast};

        &:hover {
            color: ${({ theme }) => theme.colors.text};
            border-color: ${({ theme }) => theme.colors.borderStrong};
            transform: translateY(-2px);
        }
    }
`;

const TopBar = styled.div`
    margin-bottom: 32px;
`;

const Scroll = styled.button`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    cursor: pointer;

    & svg {
        animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
    }
`;

export function Hero() {
    const { t } = useTranslation();
    const roles = t('hero.roles', { returnObjects: true });

    return (
        <Wrap id="hero">
            <Glow />
            <GlowAlt />
            <Grid />
            <Inner>
                <TopBar>
                    <Tag>{t('hero.status')}</Tag>
                </TopBar>
                <Greet>{t('hero.greeting')}</Greet>
                <Title>
                    <GradientText>{t('hero.name')}</GradientText>
                </Title>
                <Roles>
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 30,
                        }}
                    />
                </Roles>
                <Tagline>{t('hero.tagline')}</Tagline>
                <Actions>
                    <Button $variant="gradient" onClick={() => scrollTo('#projects')}>
                        {t('hero.primary')} <FiArrowUpRight size={16} />
                    </Button>
                    <ButtonLink
                        $variant="ghost"
                        href="https://drive.google.com/file/d/1IkVAmvTuqCFW8jf5HjBCJPhumUV1LfK9/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiDownload size={14} /> {t('hero.secondary')}
                    </ButtonLink>
                    <Socials>
                        <a href="https://github.com/lefurtado" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/le-furtado/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={18} />
                        </a>
                    </Socials>
                </Actions>
            </Inner>
            <Scroll onClick={() => scrollTo('#about')} aria-label={t('hero.scroll')}>
                <span>{t('hero.scroll')}</span>
                <FiArrowDown size={16} />
            </Scroll>
        </Wrap>
    );
}
