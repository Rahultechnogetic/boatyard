import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme/theme';
// import Login from './pages/Login';
import Drawer_Sidebar from './components/drawer-sidebar/Drawer_Sidebar';
import OwnerManagement from './components/owner-management';

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <Box>
        <Drawer_Sidebar>
          <OwnerManagement />
        </Drawer_Sidebar>
      </Box>
    </ThemeProvider>
  );
};

export default App;
