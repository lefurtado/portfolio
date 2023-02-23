import { BsCodeSlash, BsPhone } from 'react-icons/bs';
import './styles.scss';

export default function ServiceCards() {
    const services = [
        {
            id: 1,
            icone: <BsCodeSlash size={35} />,
            descricao: 'Criação de sites'
        },
        {
            id: 2,
            icone: <BsPhone size={35} />,
            descricao: 'Sites responsivos'
        }
    ]

    return (
        <div className='service_card_section flex'>
            {services.map(service => (
                <div key={service.id} className='service_card_container flex'>
                    <div className='service_card_icon flex'>
                        {service.icone}
                    </div>
                    <div className="title_card_container">
                        <p>{service.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}