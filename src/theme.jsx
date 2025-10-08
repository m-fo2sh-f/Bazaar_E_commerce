import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
    typography: {
        fontFamily: 'sans-serif',
    },
    palette: {
        primary: {
            light: 'rgb(255, 255, 255)',
            main: '#f9f9f9ff',
            dark: 'rgb(156, 163, 175);',
        },
        secondary: {
            light: 'rgb(75, 85, 99)',
            main: '#1F2937',
            dark: '#111827',
        },
    },
});