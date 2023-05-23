import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const NameStyle = styled.div`
    color: ${({theme}) => theme.colors.white};
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    text-align: center;

    @media(min-width: 1280px) {
        text-align: left;
        font-size: 32px;
    }
`

export default function Name() {
    return (
        <NameStyle>
                <Typewriter
                    options={{
                        strings: 'Olá, eu sou o Lê Furtado :)',
                        autoStart: true,
                        wrapperClassName: 'titulo_principal',
                        delay: 55
                    }}
                />
        </NameStyle>
    )
}