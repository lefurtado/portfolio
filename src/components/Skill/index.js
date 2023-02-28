import SkillCard from './SkillCard';
import './styles.scss';

export default function Skill() {
    return (
        <div>
            <div data-aos='fade-left' className='skill'>
                <h2>Minhas skills</h2>
            </div>
            <SkillCard />
        </div>
    )
}