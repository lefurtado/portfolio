import ServiceCards from './ServiceCards';
import './styles.scss';

export default function MainServices() {
    return (
        <div id='services' data-aos='fade-up'>
            <div className="services">
                <h2>
                    Serviços
                </h2>
            </div>
            <ServiceCards />
        </div>
    )
}