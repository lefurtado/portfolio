import './styles.scss';
import { useState } from 'react';
import visonmtel from '../../../assets/images/vison-motel-tumb.png';
import lol from '../../../assets/images/lol-tumb.png';
import trato from '../../../assets/images/trato-tech-tumb.png';
import login from '../../../assets/images/login-dashboard-tumb.png';
import secretWord from '../../../assets/images/secret-word-tumb.png';
import Modal from '../../Modal';
import styled, { css } from 'styled-components';

const hoverStyle = css`
    display: block;
    opacity: 1 !important;
`

const CardSectionStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
`

const CardContainerStyle = styled.div`
    background-color: ${({theme}) => theme.colors.gray400};
    max-width: 312px;
    min-height: 250px;
    border: 1px solid ${({theme}) => theme.colors.gray200};
    opacity: 1 !important;
    transition: 0.5s ease-in-out;
    position: relative;

    :hover {
        transform: translateY(20px);
        ${hoverStyle}
    }

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(36, 36, 36, 0.8);
        z-index: 2;
        transition: 0.5s all;
        opacity: 0;
    }

    :hover:before {
        opacity: 1;
    }
`

const ImageContainerStyle = styled.div`
    width: 260px;
    height: 133px;
    background-color: ${({theme}) => theme.colors.dark};
    border: 1px solid ${({theme}) => theme.colors.gray200};
    margin: 16px 16px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const CardDescriptionStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 260px;
    margin: 16px auto;
    gap: 10px;

    & h2 {
        color: ${({theme}) => theme.colors.white};
        font-size: 18px;
        font-weight: 500;
    }

    & p {
        color: ${({theme}) => theme.colors.gray};
        font-size: 13px;
        font-weight: 400;
    }
`

const LinkStyle = styled.div`
    display: none;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    ${CardContainerStyle}:hover & {
        ${hoverStyle}
    }

    & button {
        background-color: ${({theme}) => theme.colors.gray400};
        color: ${({theme}) => theme.colors.white};
        border: none;
        height: 42px;
        width: 130px;
        font-size: 14px;
        cursor: pointer;
    }
`

export default function Cards() {
    const [openModal, setOpenModal] = useState(false);
    const itens = [
        {
            id: 1,
            nome: 'Vison Motel',
            tecnologias: 'HTML, CSS e Javascript',
            thumb: visonmtel,
            video: 'https://streamable.com/e/ood6ej?autoplay=1',
            descricao: <p>O projeto Vision Motel faz parte de um teste prático para uma vaga Front End, o objetivo do projeto era se basear num modelo Figma fornecido aos candidatos e produzir o site de forma responsiva utilizando HTML, CSS e Javascript.
                <br />
                <br />
                Esse projeto foi desenvolvido com as seguintes ferramentas:
                <br />
                <br />
                • HTML5;
                <br />
                • Vanilla JavaScript;
                <br />
                • CSS;
                <br />
                • Bootstrap;
            </p>,
            deploy: 'https://visonmotel.vercel.app/',
            github: 'https://github.com/lefurtado/visonmotel'
        }, {
            id: 2,
            nome: 'League of Legends',
            tecnologias: 'HTML, CSS e Javascript',
            thumb: lol
        }, {
            id: 3,
            nome: 'Trato-Tech',
            tecnologias: 'React, Redux, CSS e Javascript',
            thumb: trato
        }, {
            id: 4,
            nome: 'Login Dashboard',
            tecnologias: 'React, ContextAPI, ChakraUI e Styled Components',
            thumb: login
        }, {
            id: 5,
            nome: 'Secret Word',
            tecnologias: 'React, HTML, CSS e Javascript',
            thumb: secretWord
        }
    ];

    const [itemSelecionado, setItemSelecionado] = useState(null);

    const handleDetalhesClick = (item) => {
        setItemSelecionado(item);
        setOpenModal(true);
    };

    return (
        <>
            <CardSectionStyle>
                {itens.map((item) => (
                    <CardContainerStyle key={item.id}>
                        <ImageContainerStyle>
                            <img src={item.thumb} alt="" />
                        </ImageContainerStyle>
                        <CardDescriptionStyle>
                            <h2>{item.nome}</h2>
                            <p>Tecnologias: {item.tecnologias}</p>
                        </CardDescriptionStyle>
                        <LinkStyle>
                            <button onClick={() => handleDetalhesClick(item)}>Ver detalhes</button>
                        </LinkStyle>
                    </CardContainerStyle>
                ))}
            </CardSectionStyle>
            {openModal && (
                <Modal
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                    key={itemSelecionado.id}
                    titulo={itemSelecionado.nome}
                    video={itemSelecionado.video}
                    descricao={itemSelecionado.descricao}
                    deploy={itemSelecionado.deploy}
                    github={itemSelecionado.github}
                />
            )}
        </>
    )
}