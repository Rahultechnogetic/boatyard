import { Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Settings } from '@material-ui/icons';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import { drawerWidth } from '../drawer-sidebar/Drawer_Sidebar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  background: '#FFFFFF',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Navbar = ({ open, setOpen }: NavbarProps) => {
  const [openProfile, SetOpenProfile] = useState(false);
  const [openLanguageMenu, setLanguageMenu] = useState(false);
  return (
    <AppBar position='sticky' sx={{ padding: '0px' }} className='navigation-bar'>
      <Toolbar sx={{ padding: '0px' }}>
        <Stack
          direction={'row'}
          justifyContent='space-between'
          alignItems={'center'}
          sx={{ width: '100%' }}
        >
          <Stack direction={'row'} alignItems='center'>
            <Stack direction={'row'} alignItems={'center'}>
              <img src='https://img.icons8.com/color/48/null/lego.png' />
              <Typography
                component={'span'}
                color='secondary'
                fontWeight={700}
                letterSpacing={'.2rem'}
              >
                BOATYARD
              </Typography>
            </Stack>
            <Box
              className='icon-container'
              onClick={() => setOpen(!open)}
              sx={{
                bgcolor: 'secondary.light',
                marginLeft: '1.6rem'
              }}
            >
              {open ? <CloseIcon color='secondary' /> : <MenuIcon color='secondary' />}
            </Box>
          </Stack>
          <Stack direction='row' alignItems={'center'}>
            <Box
              onClick={() => setLanguageMenu(!openLanguageMenu)}
              className='icon-container'
              sx={{
                bgcolor: 'primary.light',
                marginRight: '1.6rem',
                position: 'relative'
              }}
            >
              <TranslateIcon color='primary' />
              <Menu
                open={openLanguageMenu}
                onClose={() => SetOpenProfile(!openLanguageMenu)}
                sx={{ marginTop: '40px', marginRight: '-10rem' }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
              >
                <MenuItem>English</MenuItem>
                <MenuItem>German</MenuItem>
                <MenuItem>French</MenuItem>
              </Menu>
            </Box>

            <Stack
              direction={'row'}
              alignItems={'center'}
              sx={{
                borderRadius: '27px',
                height: '3.4rem',
                bgcolor: 'primary.light',
                px: '1.4rem',
                py: '2.4rem'
              }}
              onClick={() => SetOpenProfile(!openProfile)}
            >
              <Avatar
                alt='Remy Sharp'
                src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                sx={{ height: 30, width: 30, marginRight: '.8rem' }}
              />
              <Settings color='primary' className='settingf25' />
            </Stack>
            <Menu
              open={openProfile}
              onClose={() => SetOpenProfile(!openProfile)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              sx={{ marginTop: '40px' }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
