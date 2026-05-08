# Portfolio

A single-page developer portfolio built with React. It presents professional experience, projects, services, and skills in a cohesive layout with smooth in-page navigation, a responsive navbar, and polished UI components.

## About this project

This site is a personal showcase: visitors can explore an introduction and hero section, an about area, a career timeline, featured projects (with detail modals), services, technical skills, and a contact form. The interface supports **light and dark themes** and **English / Portuguese** switching via `i18next`, so content can be read in either language. Styling is done with **styled-components** and design tokens for consistent typography, spacing, and colors. The contact section uses **EmailJS** to send messages from the browser without a custom backend.

The app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is a standard client-side React 18 application.

## Tech stack

- React 18, Create React App
- styled-components
- i18next / react-i18next (locales: `en`, `pt`)
- react-scroll, typewriter-effect, react-icons
- @emailjs/browser (contact form)

## Getting started

Requirements: **Node.js** and **npm**.

Install dependencies:

```bash
npm install
```

Run the development server (opens at [http://localhost:3000](http://localhost:3000)):

```bash
npm start
```

Create an optimized production build in the `build` folder:

```bash
npm run build
```

Run tests in watch mode:

```bash
npm test
```

## Learn more

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://react.dev/)
