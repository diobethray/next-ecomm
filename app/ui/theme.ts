'use client';
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900']
});

const pallete = {
  primary: {
    main: '#737373',
    light: '#bdbdbd',
    dark: '#252B42',
    contrastText: '#23A6F0'
  },
  secondary: {
    main: '#2DC071',
    light: '#fff',
    dark: '#23856D',
    contrastText: '#F3CD03'
  }
};

const theme = createTheme({
  palette: pallete,
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: 14,
    h2: {
      fontSize: 40,
      fontWeight: 700,
      textDecoration: 'none',
      color: pallete.primary.dark,
      marginTop: '5px',
      marginBottom: '5px',
      letterSpacing: '.2px'
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '.1px',
      textDecoration: 'none',
      color: pallete.primary.dark,
      marginTop: '4px',
      marginBottom: '4px'
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
      textDecoration: 'none',
      letterSpacing: '.2px'
    },
    h5:{
      fontWeight: 700,
      fontSize: 16,
      textDecoration: 'none',
      color: pallete.primary.dark,
      letterSpacing: '.2px'
    },
    body1: {
      fontSize: 14,
      color: pallete.primary.main,
      letterSpacing: '.2px'
    },
    body2: {
      fontSize: 12,
      letterSpacing: '.2px',
      fontWeight: 400
    },
    caption: {
      fontSize: 14,
      fontWeight: 700,
      textDecoration: 'none',
      letterSpacing: '.2px'
    }
  }
});

export default theme;