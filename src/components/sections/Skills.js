import styled from 'styled-components';
import {
    DiCss3,
    DiHtml5,
    DiJsBadge,
    DiReact,
    DiNodejsSmall,
    DiPostgresql,
} from 'react-icons/di';
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
    SiReacthookform,
    SiDotnet,
    SiSharp,
    SiSupabase,
    SiFlutter,
    SiDart,
    SiFirebase,
    SiSocketdotio,
    SiDocker,
    SiGithubactions,
    SiGit,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const groups = {
    frontend: [
        { name: 'React', icon: <DiReact size={28} /> },
        { name: 'TypeScript', icon: <SiTypescript size={24} /> },
        { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
        { name: 'JavaScript', icon: <DiJsBadge size={28} /> },
        { name: 'React Hook Form', icon: <SiReacthookform size={24} /> },
        { name: 'Redux', icon: <SiRedux size={24} /> },
        { name: 'Tailwind', icon: <SiTailwindcss size={24} /> },
        { name: 'HTML', icon: <DiHtml5 size={28} /> },
        { name: 'CSS', icon: <DiCss3 size={28} /> },
    ],
    backend: [
        { name: 'Node.js', icon: <DiNodejsSmall size={28} /> },
        { name: '.NET', icon: <SiDotnet size={24} /> },
        { name: 'C#', icon: <SiSharp size={24} /> },
        { name: 'PostgreSQL', icon: <DiPostgresql size={28} /> },
        { name: 'Supabase', icon: <SiSupabase size={24} /> },
        { name: 'REST APIs', icon: <DiNodejsSmall size={28} /> },
    ],
    mobile: [
        { name: 'Flutter', icon: <SiFlutter size={24} /> },
        { name: 'Dart', icon: <SiDart size={24} /> },
        { name: 'FCM', icon: <SiFirebase size={24} /> },
    ],
    realtime: [
        { name: 'WebSocket', icon: <SiSocketdotio size={24} /> },
        { name: 'SignalR', icon: <SiDotnet size={24} /> },
    ],
    infra: [
        { name: 'Docker', icon: <SiDocker size={24} /> },
        { name: 'GitHub Actions', icon: <SiGithubactions size={24} /> },
        { name: 'Azure DevOps', icon: <VscAzureDevops size={24} /> },
        { name: 'Git', icon: <SiGit size={24} /> },
    ],
};

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const GroupLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: ${({ theme }) => theme.font.mono};
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: ${({ theme }) => theme.colors.textMuted};

    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${({ theme }) => theme.colors.border};
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(150px, 100%), 1fr));
    gap: 12px;
`;

const Skill = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    transition: border-color ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast},
                transform ${({ theme }) => theme.transition.fast};

    & > span:first-child {
        color: ${({ theme }) => theme.colors.accent};
        display: inline-flex;
        flex-shrink: 0;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.surfaceElevated};
        transform: translateY(-2px);
    }
`;

export function Skills() {
    const { t } = useTranslation();

    return (
        <Section id="skills">
            <Container>
                <SectionHeader label={t('skills.label')} title={t('skills.title')} />
                <Stack>
                    {Object.entries(groups).map(([key, list]) => (
                        <Group key={key}>
                            <GroupLabel>{t(`skills.groups.${key}`)}</GroupLabel>
                            <Grid>
                                {list.map((s) => (
                                    <Skill key={s.name}>
                                        <span>{s.icon}</span>
                                        <span>{s.name}</span>
                                    </Skill>
                                ))}
                            </Grid>
                        </Group>
                    ))}
                </Stack>
            </Container>
        </Section>
    );
}
