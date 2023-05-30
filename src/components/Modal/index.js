// import './styles.scss';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import styled from 'styled-components';

const ModalContainerStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1300px;
    height: 500px;
    background-color: ${({theme}) => theme.colors.gray400};
    transform: translate(-50%, -50%);
    z-index: 1000;
`

const ContainerVideoStyle = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.white};
    padding: 20px;
    gap: 1.5rem;
`

const TitleContainerStyle = styled.div`
    margin-top: 20px;

    & h2 {
        font-size: 28px;
        font-weight: 700;
    }
`

const CloseBtnStyle = styled.div`
    cursor: pointer;
    position: fixed;
    right: 2px;
    top: 2px;
    color: ${({theme}) => theme.colors.greenLight};
`

const DescriptionContentStyle = styled.div`
    margin-top: 10px;
    color: ${({theme}) => theme.colors.gray};
    line-height: 1.5rem;
`

const LinkStyle = styled.div`
    display: flex;
    margin-left: 20px;
    text-align: center;
    width: 400px;
    justify-content: space-between;

    & a {
        color: ${({theme}) => theme.colors.dark};
        text-decoration: none;
    }
`

const BtnStyle = styled.div`
    background-color: ${({theme}) => theme.colors.greenLight};
    padding: 10px;
    width: 150px;
`

export default function Modal({ isOpen, setModalOpen, titulo, video, descricao, deploy, github }) {

    if (isOpen) {
        return (
            <div>
                <ModalContainerStyle>
                    <ContainerVideoStyle>
                        <div>
                            <iframe title='projeto' src={video} width="600" height="403" allow="autoplay"></iframe>
                        </div>
                        <div>
                            <TitleContainerStyle>
                                <div>
                                    <h2>{titulo}</h2>
                                </div>
                                <CloseBtnStyle>
                                    <AiOutlineCloseSquare onClick={setModalOpen} size={35} />
                                </CloseBtnStyle>

                            </TitleContainerStyle>
                            <DescriptionContentStyle>
                                {descricao}
                            </DescriptionContentStyle>
                        </div>
                    </ContainerVideoStyle>
                    <LinkStyle>
                        <BtnStyle>
                            <a href={deploy} target='_blank' rel='noreferrer'>Acessar projeto</a>
                        </BtnStyle>
                        <BtnStyle>
                            <a href={github} target='_blank' rel='noreferrer'>Acessar repositório</a>
                        </BtnStyle>
                    </LinkStyle>
                </ModalContainerStyle>
            </div>
        )
    }
}