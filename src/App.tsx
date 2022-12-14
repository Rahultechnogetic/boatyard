import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme/theme';
import Login from './pages/Login';
import Drawer_Sidebar from './components/drawer-sidebar/Drawer_Sidebar';
import OwnerManagement from './components/owner-management';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(false);
  if (user) {
    return <Login />;
  }
  return (
    <ThemeProvider theme={theme()}>
      <Box>
        <Drawer_Sidebar>
          <Routes>
            <Route path='/' element={<OwnerManagement />} />
          </Routes>
        </Drawer_Sidebar>
        {/* <Login /> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
