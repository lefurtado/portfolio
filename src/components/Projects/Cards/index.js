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
            descricao: <p>Daily Weather é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto os dos próximos 7 dias, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima.
                <br />
                <br />
                Esse projeto foi desenvolvido com as seguintes ferramentas:
                <br />
                <br />
                • HTML5;
                <br />
                • Vanilla JavaScript;
                <br />
                • Compilador SASS;
                <br />
                • Unsplash API;
                <br />
                • Open Weather API (One Call &amp; Current Weather Data);
                <br />
                • LocalStorage API;
                <br />
                • Moment.js;
                <br />
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