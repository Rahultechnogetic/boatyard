import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme';
// import { StyledButton } from './styled/components/common';
import Login from './components/login/Login';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Login />
      </Box>
    </ThemeProvider>
  );
};

export default App;
