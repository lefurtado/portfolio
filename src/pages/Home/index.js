import Header from '../../components/Header';
import Contact from '../../components/Contact';
import './styles.scss';
import About from '../../components/About';

export default function Home() {
    return (
        <div>
            <Header />
            <div className='contact'>
                <Contact />
            </div>
            <About />
        </div>
    )
}