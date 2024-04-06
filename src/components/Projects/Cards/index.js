import styled from 'styled-components';
import { projects } from '../../../data/projects';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
    gap: 55px;

    @media(min-width: 1280px) {
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        max-width: 1280px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 300px;
        transition: ease 1s all;

        :hover {
            scale: 1.02;
        }

        @media(min-width: 1280px) {
            width: 600px;
        }
    }
`;

const DescricaoProjeto = styled.div`
    text-align: center;
    line-height: 200%;

    & h2 {
        font-size: 28px;
        font-weight: bold;
    }
`;

export default function Cards() {
    return (
        <CardContainer>
            {projects.map((project) => (
                <ImageContainer key={project.id}>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                        <img src={project.imagem} alt="" />
                    </a>
                    <DescricaoProjeto>
                        <h2>{project.titulo}</h2>
                        <p>{project.tecnologias}</p>
                    </DescricaoProjeto>
                </ImageContainer>
            ))}
        </CardContainer>
    )
}