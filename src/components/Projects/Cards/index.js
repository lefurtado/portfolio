import './styles.scss';
import { useState } from 'react';
import visonmtel from '../../../assets/images/vison-motel-tumb.png';
import lol from '../../../assets/images/lol-tumb.png';
import trato from '../../../assets/images/trato-tech-tumb.png';
import login from '../../../assets/images/login-dashboard-tumb.png';
import secretWord from '../../../assets/images/secret-word-tumb.png';
import Modal from '../../Modal';

export default function Cards() {
    const [openModal, setOpenModal] = useState(false);
    const [itens, setItens] = useState([
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
    ]);

    const [itemSelecionado, setItemSelecionado] = useState(null);

    const handleDetalhesClick = (item) => {
        setItemSelecionado(item);
        setOpenModal(true);
    };

    return (
        <>
            <div className='card-section flex'>
                {itens.map((item) => (
                    <div key={item.id} className="card-container">
                        <div className="image-container">
                            <img src={item.thumb} alt="" />
                        </div>
                        <div className="card-description flex">
                            <h2>{item.nome}</h2>
                            <p>Tecnologias: {item.tecnologias}</p>
                        </div>
                        <div className="link">
                            <button onClick={() => handleDetalhesClick(item)}>Ver detalhes</button>
                        </div>
                    </div>
                ))}
            </div>
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