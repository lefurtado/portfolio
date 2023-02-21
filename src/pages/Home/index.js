import Header from '../../components/Header';
import Contact from '../../components/Contact';
import About from '../../components/About';
import ContactIcons from '../../components/ContactIcons';
import Footer from '../../components/Footer';
import './styles.scss';

export default function Home() {
    return (
        <div>
            <div className="teste">
                <Header />
                <div className='contact'>
                    <Contact />
                </div>
                <About />
                <ContactIcons />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}