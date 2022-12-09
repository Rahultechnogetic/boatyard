import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InfoIcon from '@mui/icons-material/Info';
import SailingIcon from '@mui/icons-material/Sailing';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ConstructionIcon from '@mui/icons-material/Construction';

// props types
interface SidebarProps {
  open: boolean;
}

const SidebarMenus = (props: SidebarProps) => {
  const { open } = props;
  return (
    <List className='sidebar-container'>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <AdminPanelSettingsIcon sx={{ color: 'primary.dark' }} />
          </ListItemIcon>
          <ListItemText primary={'OwnerManagement'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={'Information'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <SailingIcon />
          </ListItemIcon>
          <ListItemText primary={'Services'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <ApartmentIcon />
          </ListItemIcon>
          <ListItemText primary={'Service Company'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center'
            }}
          >
            <ConstructionIcon />
          </ListItemIcon>
          <ListItemText primary={'Equipment'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
('');

export default SidebarMenus;
