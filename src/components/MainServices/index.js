import ServiceCards from './ServiceCards';
import './styles.scss';
import styled from 'styled-components';

const ServicesStyle = styled.div`
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 56px;

    @media(min-width: 1280px) {
        margin-top: 120px;
    }
`

export default function MainServices() {
    return (
        <div id='services' data-aos='fade-right'>
            <ServicesStyle>
                <h2>
                    Serviços
                </h2>
            </ServicesStyle>
            <ServiceCards />
        </div>
    )
}