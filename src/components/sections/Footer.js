import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';

const Wrap = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: 32px 0;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
    }
`;

const Brand = styled.div`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textMuted};

    & strong {
        color: ${({ theme }) => theme.colors.text};
    }

    & span {
        color: ${({ theme }) => theme.colors.accent};
    }
`;

const Socials = styled.div`
    display: flex;
    gap: 12px;

    & a {
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        border: 1px solid ${({ theme }) => theme.colors.border};
        color: ${({ theme }) => theme.colors.textMuted};
        transition: all ${({ theme }) => theme.transition.fast};

        &:hover {
            color: ${({ theme }) => theme.colors.text};
            border-color: ${({ theme }) => theme.colors.borderStrong};
        }
    }
`;

export function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    return (
        <Wrap>
            <Container>
                <Inner>
                    <Brand>
                        © {year} <strong>Leandro Furtado</strong> — {t('footer.rights')}
                    </Brand>
                    <Brand>
                        {t('footer.made')} <span>♥</span> {t('footer.and')}
                    </Brand>
                    <Socials>
                        <a href="https://github.com/lefurtado" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/le-furtado/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={16} />
                        </a>
                    </Socials>
                </Inner>
            </Container>
        </Wrap>
    );
}
