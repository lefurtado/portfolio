import styled from 'styled-components';

const AboutContainer = styled.div`
    flex-direction: column;
    gap: 20px;
    width: 300px;
    margin: 50px auto 0;

    @media(min-width: 1280px) {
        width: auto;
    }

    & h2 {
    color: ${({theme}) => theme.colors.white};
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    }

    & p {
    color: ${({theme}) => theme.colors.gray};
    line-height: 20px;
    font-size: 20px;
    margin-top: 20px;
    text-align: center;
    }

    @media(min-width: 1280px){
        max-width: 750px;
        margin: auto;
        margin-top: 120px;

        & h2 {
        font-size: 32px;
        }

        & p {
        line-height: 30px;
        font-size: 18px;
        margin-top: 20px;
        }
    }
`

export default function About() {
    return (
        <div id='about' data-aos='fade-right'>
            <AboutContainer>
                <div>
                    <h2>Sobre mim</h2>
                </div>
                <div>
                    <p>
                        Olá! Meu nome é Leandro Furtado, trabalho como Desenvolvedor frontend em
                        uma empresa de software focada no
                        desenvolvimento de sistemas de pagamentos.
                        Atualmente, também tenho feito trabalhos freelancers.
                        Especializado em React,
                        Javascript (ES6), Next.JS, Styled Components,
                        Bootstrap e NodeJS. Habilidades sólidas em
                        criação de interfaces responsivas e funcionais,
                        buscando constantemente atualização e
                        aprimoramento técnico.
                    </p>
                    <p>
                        Estou entusiasmado em fazer parte de uma equipe de desenvolvimento
                        e contribuir para o sucesso do projeto.
                    </p>
                </div>
            </AboutContainer>
        </div>
    )
}