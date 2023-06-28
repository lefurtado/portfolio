import './styles.scss';
import styled from 'styled-components';

const FooterStyles = styled.div`
    display: flex;
    height: 40px;
    background-color: ${({theme}) => theme.colors.gray400};
    flex-direction: column;
    justify-content: center;
    margin-top: 56px;

    & p {
    font-size: 12px;
    text-align: center;
    color: #BFD7EA;
    }

    & span {
        color: ${({theme}) => theme.colors.greenLight};
    }

    @media(min-width: 1280px) {
        height: 60px;
        margin-top: 120px;

        & p {
            font-size: 16px;
        }
    }
`

export default function Footer() {
    return (
        <FooterStyles>
            <p>Feito com &#128154; por <span>Leandro Furtado</span></p>
        </FooterStyles>
    )
}