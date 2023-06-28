import styled from 'styled-components';
import mockupFoodJp from '../../../assets/images/mockup1.png';
import mockupVisonMotel from '../../../assets/images/mockup2.png';

const projetos = [
    {
        id: 1,
        imagem: mockupFoodJp,
        titulo: 'FoodJP Restaurante Japonês',
        tecnologias: 'React e Styled Components',
        link: 'https://food-jp-gamma.vercel.app/'
    },
    {
        id: 2,
        imagem: mockupVisonMotel,
        titulo: 'Vison Motel',
        tecnologias: 'HTML, CSS, Javascript e Bootstrap',
        link: 'https://visonmotel.vercel.app/'
    }
]

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 55px;

    @media(min-width: 1280px) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 55px;
        max-width: 1300px;
        margin: 50px auto;
    }
`;

const ImageContainer = styled.div`

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
            {projetos.map((projeto) => (
                <ImageContainer key={projeto.id}>
                    <a href={projeto.link} target='_blank' rel='noreferrer'>
                        <img src={projeto.imagem} alt="" />
                    </a>
                    <DescricaoProjeto>
                        <h2>{projeto.titulo}</h2>
                        <p>{projeto.tecnologias}</p>
                    </DescricaoProjeto>
                </ImageContainer>
            ))}
        </CardContainer>
    )
}