import Cards from './Cards';
import './styles.scss';

export default function Projects() {
    return (
        <div id='projects'>
            <div data-aos='fade-down' className='project'>
                <h2>Projetos</h2>
            </div>
            <Cards />
        </div>
    )
}