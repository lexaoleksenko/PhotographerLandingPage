import { createTheme } from '@mui/material/styles';
import 'typeface-montserrat';
import 'typeface-poiret-one';

const theme = createTheme({
  shadows: [
    'none',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
    '0px 0px 0px rgba(0, 0, 0, 0)',
  ],
  palette: {
    primary: {
      main: '#000000',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000000',
    },
    error: {
      main: '#B22222',
      light: '#FF0000',
      dark: '#8B0000',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFD700',
      light: '#FFFF00',
      dark: '#FF8C00',
      contrastText: '#FFFFFF',
    },
    buttonWhite: {
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000000',
    },
    buttonBlack: {
      main: '#000000',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    buttonCancel: {
      main: '#000000',
      dark: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poiret One',
    h1: {
      fontFamily: 'montserrat',
      fontSize: '45px',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'montserrat',
      fontSize: '40px',
      fontWeight: 400,
    },
    p: {
      fontFamily: 'montserrat',
      fontSize: '20px',
      fontWeight: 400,
    },
    span: {
      fontFamily: 'montserrat',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
});

export default theme;
