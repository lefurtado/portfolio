import SkillCard from './SkillCard';
import './styles.scss';

export default function Skill() {
    return (
        <div data-aos='fade-up'>
            <div className='skill'>
                <h2>Minhas skills</h2>
            </div>
            <SkillCard />
        </div>
    )
}