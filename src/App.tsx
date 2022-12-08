import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme';
import Login from './pages/Login';
import Drawer_Sidebar from './components/drawer-sidebar/Drawer_Sidebar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Login /> */}
        <Drawer_Sidebar />
      </Box>
    </ThemeProvider>
  );
};

export default App;
