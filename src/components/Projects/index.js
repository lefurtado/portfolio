import Cards from './Cards';
import './styles.scss';

export default function Projects() {
    return (
        <div data-aos='fade-right' id='projects'>
            <div className='project'>
                <h2>Projetos</h2>
            </div>
            <Cards />
        </div>
    )
}