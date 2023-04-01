import './styles.scss';
import { AiOutlineCloseSquare } from 'react-icons/ai';

export default function Modal({ isOpen, setModalOpen, titulo, video, descricao, deploy, github }) {

    if (isOpen) {
        return (
            <>
                <div className='modal_container'>
                    <div className=''>
                        <div className='modal_teste flex'>
                            <div className="video">
                                <iframe title='projeto' src={video} width="660" height="403" allow="autoplay"></iframe>
                            </div>
                            <div className="description_container">
                                <div className='title_container'>
                                    <div className="project_title">
                                        <h2>{titulo}</h2>
                                    </div>
                                    <div className='close_btn'>
                                        <AiOutlineCloseSquare onClick={setModalOpen} size={35} />
                                    </div>

                                </div>
                                <div className='description_content'>
                                    {descricao}
                                </div>
                            </div>
                        </div>
                        <div className='links flex'>
                            <div className="deploy">
                                <a href={deploy} target='_blank' rel='noreferrer'>Acessar projeto</a>
                            </div>
                            <div className="github">
                                <a href={github} target='_blank' rel='noreferrer'>Acessar repositório</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
