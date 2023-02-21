import Header from '../../components/Header';
import Contact from '../../components/Contact';
import About from '../../components/About';
import ContactIcons from '../../components/ContactIcons';
import Footer from '../../components/Footer';
import './styles.scss';
import Projects from '../../components/Projects';

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
                <Projects />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}