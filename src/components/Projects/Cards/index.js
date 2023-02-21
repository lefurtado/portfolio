import './styles.scss';

export default function Cards() {
    const projects = [
        {
            id: 1,
            nome: 'Vison Motel',
            tecnologias: 'HTML, CSS e Javascript',
            thumb: '/assets/images/vison-motel-tumb.png'
        }, {
            id: 2,
            nome: 'League of Legends',
            tecnologias: 'HTML, CSS e Javascript',
            thumb: '/assets/images/lol-tumb.png'
        }, {
            id: 3,
            nome: 'Trato-Tech',
            tecnologias: 'React, Redux, CSS e Javascript',
            thumb: '/assets/images/trato-tech-tumb.png'
        }, {
            id: 4,
            nome: 'Login Dashboard',
            tecnologias: 'React, ContextAPI, ChakraUI e Styled Components',
            thumb: '/assets/images/login-dashboard-tumb.png'
        }, {
            id: 5,
            nome: 'Secret Word',
            tecnologias: 'React, HTML, CSS e Javascript',
            thumb: '/assets/images/secret-word-tumb.png'
        }
    ]

    return (
        <div className='card-section flex'>
            {projects.map((project) => (
                <div key={project.id} className="card-container">
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