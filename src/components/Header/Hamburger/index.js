import './styles.scss';

export default function Hamburger() {

    return (
        <div>
            <nav>
                <div className="hamburger flex">
                    <div className='maior'></div>
                    <div className='maior'></div>
                    <div className='menor'></div>
                </div>
            </nav>
        </div>
    )
}