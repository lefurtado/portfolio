import { useState } from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge, BadgeRow } from '../ui/Badge';
import { StackChips } from '../ui/StackChips';
import { ProjectModal } from './ProjectModal';
import { projects } from '../../data/projects';

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;

    @media (max-width: 768px) {
        gap: 56px;
    }
`;

const Row = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

const Media = styled.div`
    position: relative;
    border-radius: ${({ theme }) => theme.radius.xl};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    overflow: hidden;
    aspect-ratio: 16 / 10;
    padding: 24px;
    order: ${({ $reverse }) => ($reverse ? 2 : 1)};

    @media (max-width: 768px) {
        order: 1;
        padding: 16px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: transform ${({ theme }) => theme.transition.slow};
    }

    &:hover img {
        transform: scale(1.02);
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    order: ${({ $reverse }) => ($reverse ? 1 : 2)};

    @media (max-width: 768px) {
        order: 2;
    }
`;

const Title = styled.h3`
    font-size: 28px;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Tagline = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
`;

const Description = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
`;

const StackLabel = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.textSubtle};
    margin-bottom: 4px;
`;

const Actions = styled.div`
    margin-top: 8px;
`;

const DetailsBtn = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    cursor: pointer;
    transition: border-color ${({ theme }) => theme.transition.fast},
                color ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast};

    svg {
        transition: transform ${({ theme }) => theme.transition.fast};
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.surfaceElevated};
    }

    &:hover svg {
        transform: translateX(4px);
    }
`;

export function Projects() {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    return (
        <Section id="projects">
            <Container>
                <SectionHeader label={t('projects.label')} title={t('projects.title')} />
                <List>
                    {projects.map((p, i) => {
                        const reverse = i % 2 === 1;
                        const item = t(`projects.items.${p.i18nKey}`, { returnObjects: true });
                        return (
                            <Row key={p.id}>
                                <Media $reverse={reverse}>
                                    <img src={p.cover} alt={item.name} loading="lazy" />
                                </Media>
                                <Info $reverse={reverse}>
                                    <BadgeRow>
                                        {p.badges.map((b) => (
                                            <Badge key={b} variant={b} />
                                        ))}
                                    </BadgeRow>
                                    <Title>{item.name}</Title>
                                    {item.tagline && <Tagline>{item.tagline}</Tagline>}
                                    {item.descriptionShort && (
                                        <Description>{item.descriptionShort}</Description>
                                    )}
                                    <div>
                                        <StackLabel>{t('projects.stackLabel')}</StackLabel>
                                        <StackChips items={p.stack} size={14} />
                                    </div>
                                    <Actions>
                                        <DetailsBtn onClick={() => setSelected(p)}>
                                            {t('projects.details')}
                                            <FiArrowRight size={16} />
                                        </DetailsBtn>
                                    </Actions>
                                </Info>
                            </Row>
                        );
                    })}
                </List>
            </Container>
            <ProjectModal
                project={selected}
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
            />
        </Section>
    );
}
