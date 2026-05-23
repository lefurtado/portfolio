import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const List = styled.ol`
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 24px;
        width: 2px;
        background: linear-gradient(to bottom,
            transparent,
            ${({ theme }) => theme.colors.accent} 15%,
            ${({ theme }) => theme.colors.accentSecondary} 85%,
            transparent);

        @media (min-width: 900px) {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const Num = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.textMuted};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.bg};
    transition: background ${({ theme }) => theme.transition.base},
                border-color ${({ theme }) => theme.transition.base},
                color ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base},
                transform ${({ theme }) => theme.transition.base};

    @media (min-width: 900px) {
        position: relative;
        left: auto;
        top: auto;
        grid-column: 2;
        justify-self: center;
        width: 56px;
        height: 56px;
        font-size: 14px;
    }
`;

const Card = styled.div`
    grid-column: 1;
    padding: 24px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme, theme: { name } }) => 
        name === 'dark' ? 'rgba(17, 17, 24, 0.6)' : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(8px);
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    line-height: 1.6;
    transition: border-color ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.base},
                box-shadow ${({ theme }) => theme.transition.base},
                color ${({ theme }) => theme.transition.fast};
    position: relative;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

    @media (min-width: 900px) {
        grid-column: ${({ $side }) => ($side === 'left' ? 1 : 3)};
        grid-row: 1;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            ${({ $side }) => ($side === 'left' ? 'right: -20px;' : 'left: -20px;')}
            width: 20px;
            height: 1px;
            background: ${({ theme }) => theme.colors.border};
            transition: background ${({ theme }) => theme.transition.fast};
        }
    }
`;

const Role = styled.h3`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
    transition: color ${({ theme }) => theme.transition.fast};
`;

const Company = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.accentSecondary};
    font-weight: 500;
    transition: color ${({ theme }) => theme.transition.fast};
`;

const Row = styled.li`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 0 56px 64px;

    &:last-child {
        padding-bottom: 0;
    }

    @media (min-width: 900px) {
        grid-template-columns: 1fr 80px 1fr;
        gap: 0;
        padding: 0 0 64px 0;
        align-items: center;
    }

    &:hover ${Num} {
        border-color: ${({ theme }) => theme.colors.accent};
        color: #fff;
        background: ${({ theme }) => theme.accent.gradient};
        box-shadow: 0 0 16px ${({ theme }) => theme.colors.glow}, 0 0 0 6px ${({ theme }) => theme.colors.bg};
        transform: scale(1.1);
    }

    &:hover ${Card} {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.text};
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(124, 92, 255, 0.1);
        
        &::after {
            background: ${({ theme }) => theme.colors.accent};
        }
    }

    &:hover ${Role} {
        color: ${({ theme }) => theme.colors.accent};
    }

    &:hover ${Company} {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const Meta = styled.div`
    grid-column: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media (min-width: 900px) {
        grid-column: ${({ $side }) => ($side === 'left' ? 1 : 3)};
        grid-row: 1;
        text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};
        padding: 0 32px;
    }
`;

const Period = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
`;

export function Timeline() {
    const { t } = useTranslation();
    const items = t('timeline.items', { returnObjects: true });

    return (
        <Section id="experience">
            <Container>
                <SectionHeader label={t('timeline.label')} title={t('timeline.title')} />
                <List>
                    {items.map((it, i) => {
                        const cardSide = i % 2 === 0 ? 'left' : 'right';
                        const metaSide = i % 2 === 0 ? 'right' : 'left';
                        const num = String(i + 1).padStart(2, '0');
                        return (
                            <Row key={i}>
                                <Card $side={cardSide}>{it.description}</Card>
                                <Num>{num}</Num>
                                <Meta $side={metaSide}>
                                    <Role>{it.role}</Role>
                                    <Company>{it.company}</Company>
                                    <Period>{it.period}</Period>
                                </Meta>
                            </Row>
                        );
                    })}
                </List>
            </Container>
        </Section>
    );
}
