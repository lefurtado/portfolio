import Buttons from './Buttons';
import Developer from './Developer';
import Name from './Name';
import './styles.scss';

export default function Contact() {
    return (
        <div className='contact-container flex'>
            <Name />
            <Developer />
            <Buttons />
        </div>
    )
}