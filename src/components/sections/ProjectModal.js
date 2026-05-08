import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Modal } from '../ui/Modal';
import { Badge, BadgeRow } from '../ui/Badge';
import { StackChips } from '../ui/StackChips';

const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 32px;
    background: ${({ theme }) => theme.colors.surface};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 640px) {
        padding: 20px 20px;
    }
`;

const Title = styled.h3`
    font-size: 28px;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.text};
    padding-right: 56px;

    @media (max-width: 640px) {
        font-size: 22px;
    }
`;

const Tagline = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
`;

const Body = styled.div`
    padding: 24px 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 640px) {
        padding: 20px 20px 24px;
    }
`;

const CarouselWrap = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    overflow: hidden;
`;

const Slide = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`;

const NavBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $side }) => ($side === 'left' ? 'left: 16px;' : 'right: 16px;')}
    width: 44px;
    height: 44px;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color ${({ theme }) => theme.transition.fast},
                color ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const Counter = styled.span`
    position: absolute;
    bottom: 12px;
    right: 16px;
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.radius.full};
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    letter-spacing: 0.06em;
`;

const Thumbs = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 16px 32px 0;

    @media (max-width: 640px) {
        padding: 16px 20px 0;
    }
`;

const Thumb = styled.button`
    width: 84px;
    height: 56px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.sm};
    border: 2px solid ${({ theme, $active }) =>
        $active ? theme.colors.accent : theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    cursor: pointer;
    padding: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const SectionLabel = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: 12px;
`;

const Description = styled.p`
    font-size: 15px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textMuted};
    white-space: pre-line;
`;

const ExternalLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    margin-top: 4px;
    padding: 10px 18px;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    text-decoration: none;
    transition: border-color ${({ theme }) => theme.transition.fast},
                color ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
    }

    svg {
        flex-shrink: 0;
    }
`;

export function ProjectModal({ project, open, onClose }) {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (open) setIndex(0);
    }, [open, project]);

    if (!project) return null;

    const gallery = project.gallery?.length ? project.gallery : [project.cover];
    const total = gallery.length;
    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);
    const item = t(`projects.items.${project.i18nKey}`, { returnObjects: true });

    return (
        <Modal open={open} onClose={onClose}>
            <Header>
                <BadgeRow>
                    {project.badges.map((b) => (
                        <Badge key={b} variant={b} />
                    ))}
                </BadgeRow>
                <Title>{item.name}</Title>
                {item.tagline && <Tagline>{item.tagline}</Tagline>}
            </Header>

            <CarouselWrap>
                <Slide src={gallery[index]} alt={item.name} />
                {total > 1 && (
                    <>
                        <NavBtn $side="left" onClick={prev} aria-label="Previous">
                            <FiChevronLeft size={20} />
                        </NavBtn>
                        <NavBtn $side="right" onClick={next} aria-label="Next">
                            <FiChevronRight size={20} />
                        </NavBtn>
                        <Counter>
                            {index + 1} / {total}
                        </Counter>
                    </>
                )}
            </CarouselWrap>

            {total > 1 && (
                <Thumbs>
                    {gallery.map((src, i) => (
                        <Thumb
                            key={i}
                            $active={i === index}
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                        >
                            <img src={src} alt="" />
                        </Thumb>
                    ))}
                </Thumbs>
            )}

            <Body>
                <div>
                    <SectionLabel>{t('projects.about')}</SectionLabel>
                    <Description>{item.descriptionLong}</Description>
                </div>
                <div>
                    <SectionLabel>{t('projects.stackLabel')}</SectionLabel>
                    <StackChips items={project.stack} />
                </div>
                {project.link ? (
                    <ExternalLink href={project.link} target="_blank" rel="noopener noreferrer">
                        {t('projects.visitSite')}
                        <FiArrowUpRight size={16} aria-hidden />
                    </ExternalLink>
                ) : null}
            </Body>
        </Modal>
    );
}
