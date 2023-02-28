import Typewriter from 'typewriter-effect';
import './styles.scss';

export default function Developer() {
    return(
        <div className='developer'>
            <Typewriter
                    options={{
                        strings: 'Desenvolvedor Front-End',
                        autoStart: true,
                        wrapperClassName: 'developer',
                        delay: 55
                    }}
                />
        </div>
    )
}