import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',         // deep black
      paper: '#1F1F1F',           // lighter card surface
    },
    primary: {
      main: '#64b5f6',            // slightly stronger blue
      light: '#90caf9',
      dark: '#42a5f5',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f06292',            // richer pink
      light: '#f48fb1',
      dark: '#ec407a',
      contrastText: '#fff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
      disabled: '#777777',
    },
    divider: 'rgba(255,255,255,0.1)',
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.125rem',
      color: '#cccccc',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1F1F1F',
        },
      },
    },
  },
})

export default theme
