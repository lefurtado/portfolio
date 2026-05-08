const shared = {
    accent: {
        primary: '#7C5CFF',
        secondary: '#00E0B8',
        gradient: 'linear-gradient(135deg, #7C5CFF 0%, #00E0B8 100%)',
        gradientSoft: 'linear-gradient(135deg, rgba(124,92,255,0.15) 0%, rgba(0,224,184,0.15) 100%)',
    },
    radius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        full: '999px',
    },
    space: (n) => `${n * 4}px`,
    font: {
        sans: "'Inter Variable', 'Inter', system-ui, -apple-system, sans-serif",
        mono: "'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, monospace",
        display: "'Inter Variable', 'Inter', system-ui, sans-serif",
    },
    transition: {
        fast: '200ms cubic-bezier(0.22, 1, 0.36, 1)',
        base: '350ms cubic-bezier(0.22, 1, 0.36, 1)',
        slow: '600ms cubic-bezier(0.22, 1, 0.36, 1)',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
};

export const darkTheme = {
    name: 'dark',
    ...shared,
    colors: {
        bg: '#0A0A0F',
        surface: '#111118',
        surfaceElevated: '#16161F',
        border: 'rgba(255,255,255,0.08)',
        borderStrong: 'rgba(255,255,255,0.14)',
        text: '#E6E6F0',
        textMuted: '#9A9AB0',
        textSubtle: '#6B6B80',
        accent: shared.accent.primary,
        accentSecondary: shared.accent.secondary,
        success: '#00E0B8',
        danger: '#FF5C7C',
        glow: 'rgba(124,92,255,0.35)',
    },
};

export const lightTheme = {
    name: 'light',
    ...shared,
    colors: {
        bg: '#FAFAFA',
        surface: '#FFFFFF',
        surfaceElevated: '#F4F4F7',
        border: 'rgba(10,10,15,0.08)',
        borderStrong: 'rgba(10,10,15,0.16)',
        text: '#0A0A0F',
        textMuted: '#5C5C70',
        textSubtle: '#8A8AA0',
        accent: shared.accent.primary,
        accentSecondary: '#00B894',
        success: '#00B894',
        danger: '#E5345E',
        glow: 'rgba(124,92,255,0.25)',
    },
};
