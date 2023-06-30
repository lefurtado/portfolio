// import './styles.scss';
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
                        Olá! Meu nome é Leandro Furtado, trabalhei como Desenvolvedor frontend em
                        uma empresa de software focada no
                        desenvolvimento de sistemas educacionais.
                        Atualmente, tenho feito trabalhos freelancers
                        nos últimos 9 meses. Especializado em React,
                        Javascript (ES6), HTML, Styled Components,
                        Bootstrap e NodeJS. Habilidades sólidas em
                        criação de interfaces responsivas e funcionais,
                        buscando constantemente atualização e
                        aprimoramento técnico.
                        {/* Primeiramente seja muito bem vindo ao meu portfólio!
                        Estou passando por transição de carreira e sempre buscando me aperfeiçoar
                        nas tecnologias que utilizo no dia-a-dia, sou um
                        Desenvolvedor Web Fullstack, com foco no front-end e
                        bastante vontade de aprender. Experiência em React, Javascript,
                        HTML5, CSS, Git, Github, NodeJS, MySQL, TypeScript.
                        Atualmente cursando tecnologia em Análise e Desenvolvimento de Sistemas
                        na faculdade Cruzeiro do Sul. */}
                    </p>
                    <p>
                        Estou entusiasmado em fazer parte de uma equipe de desenvolvimento
                        e contribuir para o sucesso do projeto.
                    </p>
                    {/* <br />
                    <p>
                    Meu interesse pela programação começou como um hobby, mas ao longo do tempo, 
                    eu percebi que gostaria de transformar essa paixão em minha carreira. 
                    Para isso, tenho me dedicado a aprender e aprimorar minhas habilidades em 
                    Javascript, HTML, CSS, Typescript, React, Sass, MySQL, NodeJS e Git.
                    </p>
                    <br />
                    <p>
                    Como parte do meu aprendizado, tenho trabalhado em projetos pessoais e 
                    colaborativos, criando páginas web responsivas, aplicativos web interativos 
                    e outras aplicações dinâmicas. Ao trabalhar nesses projetos, aprendi como 
                    comunicar minhas ideias e colaborar efetivamente com outros desenvolvedores.
                    </p>
                    <br />
                    <p>
                    Eu sou apaixonado por desafios e estou sempre em busca de novos projetos 
                    que possam me desafiar a crescer e aprender mais. Estou entusiasmado em 
                    fazer parte de uma equipe de desenvolvimento e contribuir para o sucesso 
                    do projeto.
                    </p>
                    <br />
                    <p>
                    Além de minhas habilidades técnicas, possuo excelentes habilidades interpessoais, 
                    sou uma pessoa altamente motivada e comprometida em cumprir prazos e metas 
                    estabelecidas. Estou ansioso para explorar novas oportunidades e continuar a 
                    desenvolver minhas habilidades em programação.
                    </p> */}
                </div>
            </AboutContainer>
        </div>
    )
}