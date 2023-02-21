import './styles.scss';
import {
    FaWhatsapp,
    FaRegEnvelope,
    FaGithub,
    FaRegSmileWink,
    FaLinkedinIn
} from 'react-icons/fa';

export default function ContactIcons() {
    const iconComp = [
        {
            id: 1,
            titulo: 'Meu nome',
            descricao: 'Leandro Furtado',
            icone: <FaRegSmileWink size={25} />,
        },
        {
            id: 2,
            titulo: 'E-mail',
            descricao: 'le_furtado@outlook.com.br',
            icone: <FaRegEnvelope size={25} />,
            link: 'mailto:le_furtado@outlook.com.br'
        },
        {
            id: 3,
            titulo: 'Github',
            descricao: 'lefurtado',
            icone: <FaGithub size={25} />,
            link: 'https://github.com/lefurtado'
        },
        {
            id: 4,
            titulo: 'WhatsApp',
            descricao: '(11) 97181-5551',
            icone: <FaWhatsapp size={25} />,
            link: 'https://wa.me/5511971815551'
        },
        {
            id: 5,
            titulo: 'LinkedIn',
            descricao: 'linkedin.com/in/le-furtado',
            icone: <FaLinkedinIn size={25} />,
            link: 'https://www.linkedin.com/in/le-furtado/'
        }
    ]

    return (
        <div className='main-container-icon flex'>

            {iconComp.map((icon) => (
                <a key={icon.id} href={icon.link} target='_blank' rel='noreferrer'>
                    <div className='icon-container flex'>
                        <div className="circle flex">
                            <div className="icon">
                                {icon.icone}
                            </div>
                        </div>
                        <h2>{icon.titulo}</h2>
                        <p>{icon.descricao}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}