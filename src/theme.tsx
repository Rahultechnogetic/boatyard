import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6A5ADF'
    },
    secondary: {
      main: '#ABA2F1',
      light: '#F4F2FD'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        font-size : 1.6rem
      `
    }
  }
});
