import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Marquee } from '../ui/Marquee';
import profileImage from '../../assets/images/profile-pixel.png';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    & > * {
        min-width: 0;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1.2fr 0.8fr 1fr;
        gap: 48px;
        align-items: start;
    }

    @media (min-width: 1280px) {
        gap: 64px;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 0;

    & p {
        color: ${({ theme }) => theme.colors.textMuted};
        font-size: clamp(15px, 4vw, 18px);
        line-height: 1.7;
        overflow-wrap: anywhere;
    }
`;

const ImageCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, theme: { name } }) => 
        name === 'dark' ? 'rgba(17, 17, 24, 0.6)' : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(8px);
    transition: border-color ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 12px 30px ${({ theme }) => theme.colors.glow};
    }

    & img {
        width: 100%;
        max-width: 220px;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.colors.borderStrong};
        padding: 4px;
        transition: border-color ${({ theme }) => theme.transition.fast};
    }

    &:hover img {
        border-color: ${({ theme }) => theme.colors.accentSecondary};
    }
`;

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    @media (min-width: 480px) {
        gap: 16px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 12px;
    }
`;

const StatCard = styled.div`
    min-width: 0;
    padding: 18px 14px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, theme: { name } }) => 
        name === 'dark' ? 'rgba(17, 17, 24, 0.6)' : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(8px);
    transition: border-color ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base};

    @media (min-width: 480px) {
        padding: 24px 20px;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accentSecondary};
        transform: translateY(-6px);
        box-shadow: 0 10px 24px rgba(0, 224, 184, 0.15);
    }

    & strong {
        display: block;
        font-size: clamp(24px, 7vw, 36px);
        font-weight: 700;
        background: ${({ theme }) => theme.accent.gradient};
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 6px;
        line-height: 1.1;
    }

    & span {
        display: block;
        font-size: clamp(9px, 2.4vw, 12px);
        color: ${({ theme }) => theme.colors.textMuted};
        font-family: ${({ theme }) => theme.font.mono};
        text-transform: uppercase;
        letter-spacing: 0;
        line-height: 1.35;
        hyphens: auto;
        word-break: keep-all;

        @media (min-width: 480px) {
            letter-spacing: 0.06em;
        }
    }
`;

const StackWrap = styled.div`
    margin-top: 64px;
    padding: 8px 0;
`;

const StackItem = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: ${({ theme, theme: { name } }) => 
        name === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.full};
    transition: border-color ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast};

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.accentSecondary};
        box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentSecondary};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme, theme: { name } }) => 
            name === 'dark' ? 'rgba(124, 92, 255, 0.1)' : 'rgba(124, 92, 255, 0.05)'};
    }
`;

const stack = ['React', 'TypeScript', 'Next.js', 'Node.js', '.NET', 'C#', 'PostgreSQL', 'Flutter', 'Docker', 'SignalR', 'Supabase', 'GitHub Actions'];

export function About() {
    const { t } = useTranslation();

    return (
        <Section id="about">
            <Container>
                <SectionHeader label={t('about.label')} title={t('about.title')} />
                <Grid>
                    <Text>
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                    </Text>
                    <ImageCard>
                        <img src={profileImage} alt="Leandro Furtado" />
                    </ImageCard>
                    <Stats>
                        <StatCard>
                            <strong>3+</strong>
                            <span>{t('about.stats.years')}</span>
                        </StatCard>
                        <StatCard>
                            <strong>5+</strong>
                            <span>{t('about.stats.projects')}</span>
                        </StatCard>
                        <StatCard>
                            <strong>4</strong>
                            <span>{t('about.stats.clients')}</span>
                        </StatCard>
                    </Stats>
                </Grid>
                <StackWrap>
                    <Marquee duration={40}>
                        {stack.map((s) => (
                            <StackItem key={s}>{s}</StackItem>
                        ))}
                    </Marquee>
                </StackWrap>
            </Container>
        </Section>
    );
}
