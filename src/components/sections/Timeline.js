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
        width: 1px;
        background: linear-gradient(to bottom,
            transparent,
            ${({ theme }) => theme.colors.border} 8%,
            ${({ theme }) => theme.colors.border} 92%,
            transparent);

        @media (min-width: 900px) {
            left: 50%;
        }
    }
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
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.bg};

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
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 15px;
    line-height: 1.6;
    transition: border-color ${({ theme }) => theme.transition.fast};
    position: relative;

    &:hover {
        border-color: ${({ theme }) => theme.colors.borderStrong};
    }

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
        }
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

const Role = styled.h3`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
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
