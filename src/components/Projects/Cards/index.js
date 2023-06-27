import styled from 'styled-components';
import mockupPortfolio from '../../../assets/images/mockup_portfolio.png';
import mockupFoodJp from '../../../assets/images/food-jp-portfolio.png';
import mockupVisonMotel from '../../../assets/images/vison-motel-portfolio.png';

const projetos = [
    {
        id: 1,
        imagem: mockupPortfolio,
        descricao: '',
        link: ''
    },
    {
        id: 2,
        imagem: mockupFoodJp,
        descricao: '',
        link: ''
    },
    {
        id: 3,
        imagem: mockupVisonMotel,
        descricao: '',
        link: ''
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
        margin: 100px auto;
    }
`;

const ImageContainer = styled.div`

    & img {
        width: 300px;

        @media(min-width: 1280px) {
            width: 600px;
        }
    }
`;

export default function Cards() {
    return (
        <CardContainer>
            <ImageContainer>
                <img src={mockupVisonMotel} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={mockupFoodJp} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={mockupPortfolio} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={mockupPortfolio} alt="" />
            </ImageContainer>
        </CardContainer>
    )
}