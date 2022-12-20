import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import SidebarMenus from '../sidebar/SidebarMenus';
import Navbar from '../navbar/Navbar';

export const drawerWidth = 250;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  borderRight: 'none'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  borderRight: 'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    background: '#111827',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      background: '#111827'
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      background: '#111827'
    })
  })
);

interface Drawer_Sidebar_Props {
  children: React.ReactNode;
}
const Drawer_Sidebar = (props: Drawer_Sidebar_Props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  // to close the drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Box sx={{ background: '#fff', display: { xs: 'block', lg: 'flex' } }}>
        <Drawer variant={isMdUp ? 'permanent' : 'temporary'} open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <SidebarMenus open={open} />
        </Drawer>

        {/* main content goes here inside this main tag  */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 2,
            transition: 'margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            // borderTopLeftRadius: '8px',
            // borderTopRightRadius: '8px',
            borderRadius: '1.6rem 1.6rem  0px 0px',
            minHeight: '100vh',
            boxShadow: 0,
            margin: ' 0 2rem 0 0 '
          }}
          className='main'
        >
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default Drawer_Sidebar;
