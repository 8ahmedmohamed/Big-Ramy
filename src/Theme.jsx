import { createTheme } from '@mui/material/styles';

const theme = (theme) => createTheme({
    direction: `${theme === 'en' ? 'ltr' : 'rtl'}`,
    palette: {
        primary: {
            main: '#57aca9',
            dark: '#0a0a0a',
            light: '#1E1E1E',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#55E748',
            dark: '#636363',
            light: '#55e74880',
            bgColor: '#272727',
            contrastText: '#212529'
        }
    },
    typography: {
        fontSize: 13,
        fontFamily: [
            'Barlow',
            'Almarai',
            'Poppins',
            'sans-serif'
        ].join(',')
    }
});

export default theme;