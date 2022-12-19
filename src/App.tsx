import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { theme } from './theme/theme';
import Login from './pages/Login';
import Drawer_Sidebar from './components/drawer-sidebar/Drawer_Sidebar';
import OwnerManagement from './components/owner-management';
import { Routes, Route } from 'react-router-dom';
import BoatInformation from './components/boat-information';
import BoatForm from './components/boat-information/BoatForm';
import EngineForm from './components/boat-information/EngineForm';
import BoatDetailedInfo from './components/boat-information/BoatDetailedInfo';
import ServicesManagement from './components/services-management';

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
            <Route path='/boat/steptwo/:id' element={<EngineForm />} />
            <Route path='/boat/info/:id' element={<BoatDetailedInfo />} />
            <Route path='/services' element={<ServicesManagement />} />
          </Routes>
        </Drawer_Sidebar>
      </Box>
    </ThemeProvider>
  );
};

export default App;
