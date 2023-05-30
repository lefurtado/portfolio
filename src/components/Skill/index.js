import SkillCard from './SkillCard';
import './styles.scss';
import styled from 'styled-components';

const SkillStyle = styled.div`
    & h2 {
        color: ${({theme}) => theme.colors.white};
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        margin-top: 56px;
    }

    @media(min-width: 1280px) {
        margin-top: 120px;
    }
`

export default function Skill() {
    return (
        <div id='skills' data-aos='fade-right'>
            <SkillStyle>
                <h2>Minhas skills</h2>
            </SkillStyle>
            <SkillCard />
        </div>
    )
}