import { AiOutlineCloudDownload } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
    display: flex;
    margin: auto;
    width: 310px;
    margin-top: 32px;
    justify-content: space-between;

    & button {
        font-size: 14px;
        height: 42px;
        border: none;
        cursor: pointer;
    }

    & a {
        text-decoration: none;
    }

    @media(min-width: 1280px) {
        gap: 15px;
    }
`

const primaryStyles = css`
    display: flex;
    background-color: ${({theme}) => theme.colors.greenLight};
    width: 143px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const secondaryStyles  = css`
    color: ${({theme}) => theme.colors.white};
    border: 1px solid #333333;
    background-color: transparent;
    width: 157px;
    font-family: 'DM Sans', sans-serif;
`

const Button = styled.button`
    ${props => props.primary ? primaryStyles : secondaryStyles}
`

export default function Buttons() {
    return (
        <div>
            <ButtonContainer>
                <div data-aos='fade-right'>
                    <a href="https://drive.google.com/file/d/1cDrbiVtDp-wPasUcpqlx113ouDAjcJja/view?usp=sharing" target='_blank' rel='noreferrer'>
                        <Button primary><AiOutlineCloudDownload size={25}/>Currículo</Button>
                    </a>
                </div>
                <div data-aos='fade-left'>
                    <a href="https://wa.me/5511971815551" target='_blank' rel='noreferrer'>
                        <Button>Entrar em contato</Button>
                    </a>
                </div>
            </ButtonContainer>
        </div>
    )
}