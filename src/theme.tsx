import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5',
      light: '#E3F2FD',
      dark: '#737373'
    },
    secondary: {
      main: '#673AB7',
      light: '#EDE7F6'
    },
    error: {
      main: '#FF5630'
    },
    warning: {
      main: '#FFAB00'
    },
    info: {
      main: '#00B8D9'
    },
    success: {
      main: '#36B37E'
    },
    overrides: {
      MuiTableRow: {
        root: {
          '&:last-child td': {
            borderBottom: 0
          }
        }
      }
    }
  },
  typography: {
    fontFamily: ['Public Sans', 'Poppins'].join(','),
    // Tell MUI what's the font-size on the html element is.
    htmlFontSize: 10
  }
});
