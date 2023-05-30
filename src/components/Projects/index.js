import Cards from './Cards';
import './styles.scss';
import styled from 'styled-components';

const ProjectStyle = styled.div`
    & h2 {
        color: ${({theme}) => theme.colors.white};
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        margin-top: 56px;
    }

    @media(min-width: 1280px) {
        & h2 {
            font-size: 32px;
            margin-top: 120px;
        }
    }
`

export default function Projects() {
    return (
        <div data-aos='fade-right' id='projects'>
            <ProjectStyle>
                <h2>Projetos</h2>
            </ProjectStyle>
            <Cards />
        </div>
    )
}