import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import { ApartmentOutlined } from '@material-ui/icons';
import { ConstructionOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// props types
interface SidebarProps {
  open: boolean;
}

const ListItemBtn = styled(ListItemButton)(() => ({
  borderRadius: '.8rem'
}));

const SidebarMenus = (props: SidebarProps) => {
  const { open } = props;
  return (
    <List className='sidebar-container' sx={{ padding: '2rem' }}>
      <ListItem button component={Link} to='/' disablePadding className='menu-item'>
        <ListItemBtn
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
            <AdminPanelSettingsOutlinedIcon />
          </ListItemIcon>

          <ListItemText primary={'OwnerManagement'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemBtn>
      </ListItem>
      <ListItem button component={Link} to='/boat-information' disablePadding className='menu-item'>
        <ListItemBtn
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
            <InfoOutlinedIcon />
          </ListItemIcon>

          <ListItemText primary={'information'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemBtn>
      </ListItem>
      <ListItem button component={Link} to='/service' disablePadding className='menu-item'>
        <ListItemBtn
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
            <SailingOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={'Services'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemBtn>
      </ListItem>
      <ListItem disablePadding button component={Link} to='/services' className='menu-item'>
        <ListItemBtn
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
            <ApartmentOutlined fontSize='large' />
          </ListItemIcon>
          <ListItemText primary={'Service Company'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemBtn>
      </ListItem>
      <ListItem disablePadding button component={Link} to='/service' sx={{ display: 'block' }}>
        <ListItemBtn
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
            <ConstructionOutlined />
          </ListItemIcon>
          <ListItemText primary={'Equipment'} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemBtn>
      </ListItem>
    </List>
  );
};
('');

export default SidebarMenus;
