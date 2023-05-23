import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarStyled = styled.ul`
    display: flex;
    width: 450px;
    justify-content: space-between;

    & li a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
        transition: all 100ms;
        cursor: pointer;
    }

    & li a:hover {
        color: ${({theme}) => theme.colors.greenLight};
        transition: all 100ms;
    }
`

export default function Navbar() {
    return (
        <div>
            <nav>
                <NavbarStyled>
                    <li className='list_item'>
                        <Link to="home" spy={true} smooth={true} offset={-250} duration={650}>
                            Início
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="about" spy={true} smooth={true} offset={-250} duration={650}>
                            Sobre mim
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="projects" spy={true} smooth={true} offset={-150} duration={650}>
                            Projetos
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="services" spy={true} smooth={true} offset={-250} duration={650}>
                            Serviços
                        </Link>
                    </li>
                    <li className='list_item'>
                        <Link to="skills" spy={true} smooth={true} duration={650}>
                            Minhas skills
                        </Link>
                    </li>
                </NavbarStyled>
            </nav>
        </div>
    )
}