import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Marquee } from '../ui/Marquee';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    & > * {
        min-width: 0;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1.3fr 1fr;
        gap: 80px;
        align-items: start;
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

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    @media (min-width: 480px) {
        gap: 16px;
    }
`;

const StatCard = styled.div`
    min-width: 0;
    padding: 18px 14px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    transition: border-color ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.fast};

    @media (min-width: 480px) {
        padding: 24px 20px;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.borderStrong};
        transform: translateY(-4px);
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
`;

const StackItem = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 48px;

    &::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors.accent};
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
