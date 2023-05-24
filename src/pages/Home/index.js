import { useEffect } from 'react';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import About from '../../components/About';
import ContactIcons from '../../components/ContactIcons';
import Projects from '../../components/Projects';
import MainServices from '../../components/MainServices';
import Skill from '../../components/Skill';
import Footer from '../../components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css';
import styled from 'styled-components';

const PageContainerStyle = styled.div`
    margin: 0 20px;
    @media(min-width: 1280px) {        
            max-width: 1110px;
            margin: auto;
        }
`

const ContactStyle = styled.div`
    margin-top: 56px;
    @media(min-width: 1280px) {
        margin-top: 100px;
    }
`

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <PageContainerStyle>
                <Header />
                <ContactStyle>
                    <Contact />
                </ContactStyle>
                <About />
                <ContactIcons />
                <Projects />
                <MainServices />
                <Skill />
            </PageContainerStyle>
            <>
                <Footer />
            </>
        </>
    )
}