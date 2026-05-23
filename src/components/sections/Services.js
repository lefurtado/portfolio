import styled, { keyframes } from 'styled-components';
import { BsCodeSlash, BsPhone } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const float = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const IconWrap = styled.div`
    width: 56px;
    height: 56px;
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.accent.gradient};
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: transform ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base};
`;

const Card = styled.article`
    position: relative;
    padding: 32px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    overflow: hidden;
    transition: border-color ${({ theme }) => theme.transition.base},
                transform ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base};

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.accent.gradientSoft};
        opacity: 0;
        transition: opacity ${({ theme }) => theme.transition.base};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-6px);
        box-shadow: 0 12px 30px ${({ theme }) => theme.colors.glow};

        &::before {
            opacity: 1;
        }

        ${IconWrap} {
            animation: ${float} 2s ease-in-out infinite;
            box-shadow: 0 4px 12px ${({ theme }) => theme.colors.glow};
        }
    }

    & > * {
        position: relative;
    }
`;

const Num = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};
    margin-bottom: 24px;
    letter-spacing: 0.08em;
`;

const Title = styled.h3`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 12px;
`;

const Desc = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    line-height: 1.6;
`;

const icons = [<BsCodeSlash size={26} />, <BsPhone size={26} />, <DiReact size={28} />];

export function Services() {
    const { t } = useTranslation();
    const items = t('services.items', { returnObjects: true });

    return (
        <Section id="services">
            <Container>
                <SectionHeader label={t('services.label')} title={t('services.title')} />
                <Grid>
                    {items.map((it, i) => (
                        <Card key={i}>
                            <Num>0{i + 1}</Num>
                            <IconWrap>{icons[i]}</IconWrap>
                            <Title>{it.title}</Title>
                            <Desc>{it.description}</Desc>
                        </Card>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
