import Typewriter from 'typewriter-effect';
import './styles.scss';

export default function Name() {
    return (
        <div>
            <div className="titulo_principal">
                <Typewriter
                    options={{
                        strings: 'Olá, eu sou o Lê Furtado :)',
                        autoStart: true,
                        wrapperClassName: 'titulo_principal',
                        delay: 55
                    }}
                />
            </div>
        </div>
    )
}