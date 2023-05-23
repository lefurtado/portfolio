import Buttons from './Buttons';
import Developer from './Developer';
import Name from './Name';
import illustration from '../../assets/images/illustration.svg';
import styled from 'styled-components';

const ContactContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(min-width: 1280px) {
        width: 240px;
    }
`

const IllustrationStyle = styled.div`
    display: none;

    @media(min-width: 1280px) {
        display: block;
    }
`

const FlipStyle = styled.div`
    display: block;

    @media(min-width: 1280px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`


export default function Contact() {
    return (
            <FlipStyle id='home'>
                <ContactContainerStyle>
                    <Name />
                    <Developer />
                    <Buttons />
                </ContactContainerStyle>
                <IllustrationStyle data-aos='zoom-in'>
                    <img src={illustration} alt="" />
                </IllustrationStyle>
            </FlipStyle>
    )
}