import Buttons from './Buttons';
import Developer from './Developer';
import Name from './Name';
import illustration from '../../assets/images/illustration.svg';
import './styles.scss';

export default function Contact() {
    return (
        <>
            <div className='flip flex'>
                <div className='contact-container flex'>
                    <Name />
                    <Developer />
                    <Buttons />
                </div>
                <div className='illustration'>
                    <img src={illustration} alt="" />
                </div>
            </div>
        </>
    )
}