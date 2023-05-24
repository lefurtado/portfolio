import {
    FaWhatsapp,
    FaRegEnvelope,
    FaGithub,
    FaLinkedinIn
} from 'react-icons/fa';
import styled from 'styled-components';

const MainContainerIconStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & a {
        text-decoration: none;
    }

    @media(min-width: 1280px) {
        scale: 1.2;
    }
`

const IconContainerStyle = styled.div`
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 140px;

    & h2 {
        font-size: 13px;
        color: ${({theme}) => theme.colors.white};
    }

    & p {
        font-size: 11px;
        color: ${({theme}) => theme.colors.gray};
    }

    @media(min-width: 1280px) {
        margin-top: 100px;
    }
`

const CircleStyle = styled.div`
    display: flex;
    width: 46px;
    height: 46px;
    background-color: ${({theme}) => theme.colors.gray400};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`

const IconStyle = styled.div`
    color: ${({theme}) => theme.colors.greenLight};
`

export default function ContactIcons() {
    const iconComp = [
        {
            id: 1,
            titulo: 'E-mail',
            descricao: 'le_furtado@outlook.com.br',
            icone: <FaRegEnvelope size={25} />,
            link: 'mailto:le_furtado@outlook.com.br'
        },
        {
            id: 2,
            titulo: 'Github',
            descricao: 'lefurtado',
            icone: <FaGithub size={25} />,
            link: 'https://github.com/lefurtado'
        },
        {
            id: 3,
            titulo: 'WhatsApp',
            descricao: '(11) 97181-5551',
            icone: <FaWhatsapp size={25} />,
            link: 'https://wa.me/5511971815551'
        },
        {
            id: 4,
            titulo: 'LinkedIn',
            descricao: 'linkedin.com/in/le-furtado',
            icone: <FaLinkedinIn size={25} />,
            link: 'https://www.linkedin.com/in/le-furtado/'
        }
    ]

    return (
        <MainContainerIconStyle data-aos='fade-right'>
            {iconComp.map((icon) => (
                <IconContainerStyle key={icon.id}>
                    <a href={icon.link} target='_blank' rel='noreferrer'>
                        <CircleStyle>
                            <IconStyle>
                                {icon.icone}
                            </IconStyle>
                        </CircleStyle>
                    </a>
                    <h2>{icon.titulo}</h2>
                    <p>{icon.descricao}</p>
                </IconContainerStyle>
            ))}
        </MainContainerIconStyle>
    )
}