import './styles.scss';
import visonmtel from '../../../assets/images/vison-motel-tumb.png';
import lol from '../../../assets/images/lol-tumb.png';
import trato from '../../../assets/images/trato-tech-tumb.png';
import login from '../../../assets/images/login-dashboard-tumb.png';
import secretWord from '../../../assets/images/secret-word-tumb.png';

export default function Cards() {
    const projects = [
        {
            id: 1,
            nome: 'Vison Motel',
            tecnologias: 'HTML, CSS e Javascript',
            thumb: visonmtel
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
    ]

    return (
        <div className='card-section flex'>
            {projects.map((project) => (
                <div data-aos='fade-right' key={project.id} className="card-container">
                    <div className="image-container">
                        <img src={project.thumb} alt="" height='133' />
                    </div>
                    <div className="card-description flex">
                        <h2>{project.nome}</h2>
                        <p>Tecnologias: {project.tecnologias}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}