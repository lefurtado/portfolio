import {
    FaFileAlt,
    FaGithub,
    FaLinkedin,
    FaCaretDown,
    FaChevronDown,
    FaGasPump
} from 'react-icons/fa';
import styled, { keyframes } from "styled-components";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const moveAnimation1 = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const moveAnimation2 = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const moveAnimation3 = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Seta = styled.div`
    cursor: pointer;
    animation: ${moveAnimation1} 2s infinite;
    position: absolute;
    left: 48%;
    right: 50%;
    bottom: 5%;
`;

const BackgroundStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: rgb(69,91,138);
    background: radial-gradient(circle, rgba(69,91,138,1) 0%, rgba(29,42,69,1) 100%);
`;

const ContainerStyle = styled.div`
    max-width: 1120px;
    margin: auto;
`;

const NomeStyle = styled.div`
    color: #75A7D0;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
`;

const FuncaoStyle = styled.div`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    & span {
        font-size: 200px;
        font-family: 'Poppins', sans-serif;
        line-height: 150px;
        color: #BFD7EA;
        pointer-events: none;
    }
`;

const DescricaoStyle = styled.div`
    width: 700px;
    color: #75A7D0;
    font-size: 20px;
    text-align: right;
`;

const FlexStyle = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 30px;
`;

const ContatoStyle = styled.div`
    display: inline-flex;
    gap: 20px;

    & a {
        color: #75A7D0;
    }
`;

const Icone1 = styled(FaGithub)`
    animation: ${moveAnimation1} 2s infinite;
`;

const Icone2 = styled(FaLinkedin)`
    animation: ${moveAnimation2} 2s infinite;
    animation-delay: 0.2s;
`;

const Icone3 = styled(FaFileAlt)`
    animation: ${moveAnimation3} 2s infinite;
    animation-delay: 0.4s;
`;

export default function Main() {
    return (
        <BackgroundStyle>
            <ContainerStyle>
                <NomeStyle>
                    <Typewriter
                        options={{
                            strings: 'OI EU SOU O LEANDRO',
                            autoStart: true,
                            wrapperClassName: 'developer',
                            delay: 'natural'
                        }}
                    />
                </NomeStyle>
                <FuncaoStyle data-aos='fade-left'>
                    <span>REACT</span>
                        <ContatoStyle data-aos='fade-down'>
                            <a href="https://github.com/lefurtado"  target='_blank' rel='noreferrer'><Icone1 size={60} /></a>
                            <a href="https://www.linkedin.com/in/le-furtado/" target='_blank' rel='noreferrer'><Icone2 size={60} /></a>
                            <a href="https://drive.google.com/file/d/1H4_-gsFfG7UjBR3oep_Xob19Ytt8H0ai/view?usp=drive_link" target='_blank' rel='noreferrer'><Icone3 size={60} /></a>
                        </ContatoStyle>
                    <span>DEVELOPER</span>
                </FuncaoStyle>
                <FlexStyle>
                    <DescricaoStyle data-aos='fade-right'>
                        DESENVOLVEDOR FRONT-END COM 1 ANO DE EXPERIÊNCIA ENTRE TRABALHO FREELANCER E EMPRESA DE SOFTWARE
                    </DescricaoStyle>
                </FlexStyle>
                <Seta className='list_item'>
                    <Link to="about" spy={true} smooth={true} offset={-120} duration={950}>
                        <FaChevronDown size={30} color='#75A7D0' />
                    </Link>
                </Seta>
            </ContainerStyle>
        </BackgroundStyle>
    )
}
