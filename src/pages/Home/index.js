import { useEffect } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import About from '../../components/About';
import ContactIcons from '../../components/ContactIcons';
import Formation from '../../components/Formation';
import Projects from '../../components/Projects';
import MainServices from '../../components/MainServices';
import Skill from '../../components/Skill';
import Footer from '../../components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css';
import './styles.scss';

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="page_container">
                <Header />
                <div className='contact'>
                    <Contact />
                </div>
                <About />
                <ContactIcons />
                <Formation />
                <Projects />
                <MainServices />
                <Skill />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}