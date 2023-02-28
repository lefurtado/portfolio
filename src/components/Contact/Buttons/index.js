import { AiOutlineCloudDownload } from 'react-icons/ai';
import './styles.scss';

export default function Buttons() {
    return (
        <div>
            <div className="btn_container flex">
                <div data-aos='fade-right'>
                    <a href="https://drive.google.com/file/d/1cDrbiVtDp-wPasUcpqlx113ouDAjcJja/view?usp=sharing" target='_blank' rel='noreferrer'>
                        <button className='flex' id="cv"><AiOutlineCloudDownload size={25}/>Currículo</button>
                    </a>
                </div>
                <div data-aos='fade-left'>
                    <a href="https://wa.me/5511971815551" target='_blank' rel='noreferrer'>
                        <button id="contato">Entrar em contato</button>
                    </a>
                </div>
            </div>
        </div>
    )
}