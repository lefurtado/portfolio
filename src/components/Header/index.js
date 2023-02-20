import Hamburger from './Hamburger';
import './styles.scss';

export default function Header() {
    return (
        <div className='header flex'>
            <div className='portfolio'>
                Portfólio
            </div>
            <Hamburger />
        </div>
    )
}