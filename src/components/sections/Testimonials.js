import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Marquee } from '../ui/Marquee';

const placeholders = [
    {
        quote: 'Entregou um trabalho impecável, com atenção a cada detalhe da interface.',
        name: 'Cliente Placeholder',
        role: 'Product Manager',
    },
    {
        quote: 'Comunicação clara, código limpo e prazo respeitado. Recomendo!',
        name: 'Cliente Placeholder',
        role: 'Founder',
    },
    {
        quote: 'O resultado superou nossas expectativas. Voltarei a contratar.',
        name: 'Cliente Placeholder',
        role: 'Designer',
    },
    {
        quote: 'Profissional dedicado, propôs melhorias além do que foi pedido.',
        name: 'Cliente Placeholder',
        role: 'CTO',
    },
];

const Card = styled.article`
    width: 380px;
    flex-shrink: 0;
    padding: 28px;
    border-radius: ${({ theme }) => theme.radius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    display: flex;
    flex-direction: column;
    gap: 20px;
    white-space: normal;

    & blockquote {
        font-size: 16px;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.text};
    }

    & footer {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    & strong {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.text};
    }

    & span {
        font-family: ${({ theme }) => theme.font.mono};
        font-size: 11px;
        color: ${({ theme }) => theme.colors.textMuted};
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    &::before {
        content: '"';
        font-family: ${({ theme }) => theme.font.display};
        font-size: 64px;
        line-height: 0.6;
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export function Testimonials() {
    const { t } = useTranslation();

    return (
        <Section>
            <Container>
                <SectionHeader label={t('testimonials.label')} title={t('testimonials.title')} />
            </Container>
            <Marquee duration={50}>
                {placeholders.map((p, i) => (
                    <Card key={i}>
                        <blockquote>{p.quote}</blockquote>
                        <footer>
                            <strong>{p.name}</strong>
                            <span>{p.role}</span>
                        </footer>
                    </Card>
                ))}
            </Marquee>
        </Section>
    );
}
