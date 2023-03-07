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
import { SiTypescript } from "react-icons/si";
import './styles.scss';

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
        <div className="skill_card_section flex">
            {skills.map(skill => (
                <div key={skill.id} className='skill_card_container flex'>
                    <div className="skill_icon">
                        {skill.icone}
                    </div>
                </div>
            ))}
        </div>
    )
}