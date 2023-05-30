import { BsCodeSlash, BsPhone } from 'react-icons/bs';
import { DiReact } from "react-icons/di";
import styled from 'styled-components';

const ServiceCardSectionStyle = styled.div`
font-family: 'DM Sans', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top: 40px;
`

const CardContainerStyle = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.colors.gray400};
    min-width: 312px;
    min-height: 140px;
    border-bottom: 3px solid ${({theme}) => theme.colors.greenLight};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 1280px) {
        width: 340px;
        height: 230px;
        align-items: baseline;
        gap: 50px;
    }
`

const CardIconStyle = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.greenLight};

    @media (min-width: 1280px) {
        scale: 1.5;
        margin-left: 30px;
    }
`

const CardTitleStyle = styled.div`

    & p {
        color: ${({theme}) => theme.colors.gray};
        font-size: 14px;
    }

    @media (min-width: 1280px) {
        & p {
            width: 120px;
            font-size: 32px;
        }
    }
`

export default function ServiceCards() {
    const services = [
        {
            id: 1,
            icone: <BsCodeSlash size={35} />,
            descricao: 'Criação de sites'
        },
        {
            id: 2,
            icone: <BsPhone size={35} />,
            descricao: 'Sites responsivos'
        },
        {
            id: 3,
            icone: <DiReact size={35} />,
            descricao: 'Utilização de frameworks'
        }
    ]

    return (
        <ServiceCardSectionStyle>
            {services.map(service => (
                <CardContainerStyle key={service.id}>
                    <CardIconStyle>
                        {service.icone}
                    </CardIconStyle>
                    <CardTitleStyle>
                        <p>{service.descricao}</p>
                    </CardTitleStyle>
                </CardContainerStyle>
            ))}
        </ServiceCardSectionStyle>
    )
}