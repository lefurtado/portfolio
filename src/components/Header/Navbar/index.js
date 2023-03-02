import './styles.scss';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className='navbar_desktop flex'>
                    <li className='list_item'>
                        <Link to="home" spy={true} smooth={true} offset={-250} duration={650}>
                            Início
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="about" spy={true} smooth={true} offset={-150} duration={650}>
                            Sobre mim
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="projects" spy={true} smooth={true} offset={-150} duration={650}>
                            Projetos
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="services" spy={true} smooth={true} offset={-150} duration={650}>
                            Serviços
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="skills" spy={true} smooth={true} duration={650}>
                            Minhas skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}