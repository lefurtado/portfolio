import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

const DeveloperStyle = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray};
    text-align: center;

    @media(min-width: 1280px) {
        text-align: left;
        font-size: 18px;
    }
`

export default function Developer() {
    return(
        <DeveloperStyle>
            <Typewriter
                    options={{
                        strings: 'Desenvolvedor Front-End',
                        autoStart: true,
                        wrapperClassName: 'developer',
                        delay: 'natural'
                    }}
                />
        </DeveloperStyle>
    )
}