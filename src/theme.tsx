import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00AB55'
    },
    secondary: {
      main: '#3366FF',
      light: '#637381'
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
    }
  },
  typography: {
    fontFamily: ['Public Sans', 'Poppins'].join(','),
    fontSize: 25
  }
});
