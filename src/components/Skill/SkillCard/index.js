import {
    DiCss3,
    DiGit,
    DiHtml5,
    DiJsBadge,
    DiReact,
    DiSass,
    DiNodejsSmall,
    DiMysql
} from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import styled from "styled-components";

const SkillCardSectionStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 21px;
    margin: 32px auto;
    max-width: 840px;
`

const SkillCardContainerStyle = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.colors.gray400};
    min-width: 90px;
    min-height: 90px;
    justify-content: center;
    align-items: center;

    @media(min-width: 1280px) {
        width: 150px;
        height: 150px;
    }
`

const SkillIconStyle = styled.div`
    color: ${({theme}) => theme.colors.greenLight};

    @media(min-width: 1280px) {
        scale: 1.5;
    }
`

export default function SkillCard() {
    const skills = [
        {
            id: 1,
            icone: <DiHtml5 size={55} />
        },
        {
            id: 2,
            icone: <DiCss3 size={55} />
        },
        {
            id: 3,
            icone: <DiJsBadge size={55} />
        },
        {
            id: 4,
            icone: <DiReact size={55} />
        },
        {
            id: 10,
            icone: <SiStyledcomponents size={55} />
        },
        {
            id: 5,
            icone: <DiSass size={55} />
        },
        {
            id: 6,
            icone: <DiGit size={55} />
        },
        {
            id: 7,
            icone: <DiNodejsSmall size={55} />
        },
        {
            id: 8,
            icone: <DiMysql size={55} />
        },
        {
            id: 9,
            icone: <SiTypescript size={55} />
        },
    ]

    return (
        <SkillCardSectionStyle>
            {skills.map(skill => (
                <SkillCardContainerStyle key={skill.id}>
                    <SkillIconStyle>
                        {skill.icone}
                    </SkillIconStyle>
                </SkillCardContainerStyle>
            ))}
        </SkillCardSectionStyle>
    )
}