import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import styled from 'styled-components';

import About from '../../components/About';
import Projects from '../../components/Projects';
import MainServices from '../../components/MainServices';
import Skill from '../../components/Skill';
import Footer from '../../components/Footer';
import Main from '../../components/MainSection';

const FontStyle = styled.div`
    font-family: 'DM Sans', sans-serif;
`

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <FontStyle>
            <Main />
            <About />
            <Projects />
            <MainServices />
            <Skill />
            <Footer />
        </FontStyle>
    )
}