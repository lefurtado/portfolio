import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './hooks/useTheme';
import { GlobalStyle } from './components/GlobalStyle';
import { Reset } from './theme/reset';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Reset />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
