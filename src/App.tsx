import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme/theme';
import Login from './pages/Login';
import Drawer_Sidebar from './components/drawer-sidebar/Drawer_Sidebar';
import OwnerManagement from './components/owner-management';
import { Routes, Route } from 'react-router-dom';
import BoatInformation from './components/boat-information-management';
import BoatForm from './components/boat-information-management/BoatForm';

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
            <Route path='/boat-information' element={<BoatInformation />} />
            <Route path='/boat/:id' element={<BoatForm />} />
          </Routes>
        </Drawer_Sidebar>
        {/* <Login /> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
