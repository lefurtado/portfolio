import Hamburger from './Hamburger';
import Navbar from './Navbar';
import './styles.scss';

export default function Header() {
    return (
        <div className='header flex'>
            <div className='portfolio'>
                Portfólio
            </div>
            <div className='hamburger_menu'>
                <Hamburger />
            </div>
            <div className='navbar_menu'>
                <Navbar />
            </div>
        </div>
    )
}