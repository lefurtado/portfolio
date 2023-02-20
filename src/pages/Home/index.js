import Header from '../../components/Header';
import Contact from '../../components/Contact';
import About from '../../components/About';
import ContactIcons from '../../components/ContactIcons';
import './styles.scss';

export default function Home() {
    return (
        <div>
            <Header />
            <div className='contact'>
                <Contact />
            </div>
            <About />
            <ContactIcons />
        </div>
    )
}