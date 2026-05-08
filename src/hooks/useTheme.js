import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../theme/tokens';

const ThemeContext = createContext({ mode: 'dark', toggle: () => {} });

const STORAGE_KEY = 'portfolio:theme';

function getInitial() {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
    const [mode, setMode] = useState(getInitial);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const toggle = useCallback(() => {
        setMode((m) => (m === 'dark' ? 'light' : 'dark'));
    }, []);

    const value = useMemo(() => ({ mode, toggle }), [mode, toggle]);
    const theme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={value}>
            <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeMode() {
    return useContext(ThemeContext);
}
