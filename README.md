# Portfolio — Leandro Furtado

Site de portfólio pessoal em página única (SPA), construído com **React 18** e **Vite**. Apresenta perfil profissional, trajetória, projetos, serviços, stack técnica e formulário de contato — com suporte a **tema claro/escuro** e **português/inglês**.

## Funcionalidades

- **Hero** — apresentação com efeito typewriter nos papéis, links sociais e CTAs (projetos, download de CV)
- **Sobre** — resumo profissional e estatísticas
- **Experiência** — linha do tempo de carreira (conteúdo via i18n)
- **Projetos** — listagem com mockups, badges, chips de stack e modal de detalhes com galeria
- **Serviços** — áreas de atuação oferecidas
- **Skills** — tecnologias com ícones (`react-icons`)
- **Contato** — formulário com [EmailJS](https://www.emailjs.com/) e links diretos (e-mail, WhatsApp, GitHub, LinkedIn)
- **Navbar fixa** — navegação por âncoras com scroll suave, menu mobile e alternância de tema/idioma
- **Tema** — modo claro ou escuro persistido em `localStorage` (`portfolio:theme`), com fallback para `prefers-color-scheme`
- **Internacionalização** — `i18next` com detecção automática e persistência em `localStorage` (`portfolio:lang`); idiomas: `pt` (padrão) e `en`

## Stack

| Categoria | Tecnologias |
|-----------|-------------|
| Core | React 18, Vite 8 |
| Estilo | styled-components, design tokens (`src/theme/tokens.js`), reset SCSS |
| Fontes | [@fontsource-variable/inter](https://fontsource.org/), [@fontsource-variable/jetbrains-mono](https://fontsource.org/) |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| UX | react-scroll, typewriter-effect, react-icons |
| Contato | @emailjs/browser |
| Build | @vitejs/plugin-react, transform JSX em arquivos `.js` via Oxc |

**Requisito de runtime:** Node.js **24.x** (definido em `package.json` → `engines`).

## Estrutura do projeto

```
portfolio/
├── index.html              # HTML base e meta tags
├── vite.config.js          # Vite (porta 3000, output em build/)
├── package.json
└── src/
    ├── main.jsx            # Bootstrap: tema, estilos globais, i18n
    ├── App.js              # Roteamento mínimo → página Home
    ├── pages/
    │   └── Home/           # Composição das seções
    ├── components/
    │   ├── layout/         # Navbar, ThemeToggle, LangToggle
    │   ├── sections/       # Hero, About, Timeline, Projects, …
    │   └── ui/             # Button, Modal, Container, Badge, …
    ├── data/
    │   ├── projects.js     # Projetos (imagens, stack, links)
    │   └── stack.js        # Mapa de tecnologias e ícones
    ├── hooks/
    │   ├── useTheme.js     # Provider de tema (styled-components)
    │   ├── useInView.js    # Animações ao entrar na viewport
    │   └── scrollTo.js     # Scroll suave entre seções
    ├── i18n/
    │   ├── index.js        # Configuração i18next
    │   └── locales/        # pt.json, en.json
    ├── theme/
    │   ├── tokens.js       # Temas light/dark
    │   ├── reset.scss
    │   └── reset.js
    └── assets/images/      # SVGs, mockups de projetos
```

Componentes como `Testimonials` e `Marquee` existem em `src/components/` mas **não estão montados** na página `Home` atual.

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) **24.x**
- npm

### Instalação e desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe em [http://localhost:3000](http://localhost:3000) (porta configurada em `vite.config.js`).

### Build de produção

```bash
npm run build
```

Gera os arquivos estáticos na pasta `build/`.

### Preview da build

```bash
npm run preview
```

Serve localmente o resultado de `npm run build` para validação antes do deploy.

## Variáveis de ambiente (EmailJS)

O formulário de contato usa credenciais do [EmailJS](https://www.emailjs.com/). Crie um arquivo `.env` na raiz do projeto (já ignorado pelo Git):

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

Sem essas variáveis, o envio **simula sucesso** após um delay (útil para desenvolvimento local sem conta EmailJS). Em produção, configure as três variáveis no provedor de hospedagem (Vercel, Netlify, etc.).

No template EmailJS, os campos enviados são: `from_name`, `reply_to` e `message`.

## Personalizar conteúdo

| O que alterar | Onde |
|---------------|------|
| Textos, timeline, descrições de projetos | `src/i18n/locales/pt.json` e `en.json` |
| Imagens, links e stack dos projetos | `src/data/projects.js` |
| Ícones e nomes das tecnologias | `src/data/stack.js` |
| Cores, tipografia e espaçamento | `src/theme/tokens.js` |
| Meta tags e título da página | `index.html` |

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Build otimizada para produção |
| `npm run preview` | Preview local da build |

## Deploy

O projeto é uma SPA estática. Após `npm run build`, publique o conteúdo da pasta `build/` em qualquer host de arquivos estáticos (Vercel, Netlify, GitHub Pages, etc.). Lembre-se de definir as variáveis `VITE_*` do EmailJS no ambiente de produção.

## Referências

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [styled-components](https://styled-components.com/)
- [i18next](https://www.i18next.com/)
- [EmailJS](https://www.emailjs.com/docs/)
