import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Menu, MenuItem, Stack, TableFooter, TablePagination } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit, Sort } from '@material-ui/icons';
import Modal from '../modal/Modal';
import { useState } from 'react';
import AddOwner from './AddOwner';
import {
  ActiveButton,
  InActiveButton,
  TableHeadCell
} from '../../styled/components/ownerManagementStyled';
import { ownerData } from './ownerstatic.data';

const OwnerManagement = () => {
  // const [page, setPage] = React.useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filterMenuPosition, setFilterMenuPosition] = useState<any>(null);
  const [data, setData] = useState(ownerData);

  const handleFilterMenu = (event: React.MouseEvent) => {
    if (filterMenuPosition) {
      return;
    }
    event.preventDefault();
    setFilterMenuPosition({
      top: event.pageY,
      left: event.pageX
    });
  };

  const handleFilterMenuItem = () => {
    setFilterMenuPosition(null);
  };

  // delete a record
  const handleDelete = (ownerId: string) => {
    const newData = [...data].filter((owner) => {
      return owner.ownerId !== ownerId;
    });
    setData(newData);
  };

  return (
    <Box sx={{ bgcolor: '#ffffff', borderRadius: '.8rem' }}>
      <Stack
        className='filter-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: '.8rem',
          borderTopRightRadius: '.8rem',
          padding: '3rem 2rem '
        }}
        direction={'row'}
        justifyContent='space-between'
        alignItems={'center'}
      >
        <Box
          sx={{
            height: '40px',
            width: '40%',
            padding: '1.2rem ',
            border: '1px solid rgba(145, 158, 171, 0.32)',
            borderRadius: '.8rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <InputBase
            placeholder='Search  here ....'
            inputProps={{
              style: { fontFamily: 'Public Sans', color: '#777' },
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Stack direction={'row'} alignItems='center'>
          <Button
            variant='contained'
            sx={{
              bgcolor: 'primary',
              fontWeight: 700,
              border: 0,
              '&:hover': {
                bgcolor: 'primary.main',
                color: '#fff'
              }
            }}
            onClick={() => setOpenModal(true)}
          >
            Add Boat Owner
          </Button>
          <Box
            className='icon-container'
            sx={{
              bgcolor: 'primary.light',
              marginLeft: '1.6rem'
            }}
            onClick={handleFilterMenu}
          >
            <Sort fontSize='large' color='primary' />
            <Menu
              open={!!filterMenuPosition}
              onClose={() => setFilterMenuPosition(null)}
              anchorReference='anchorPosition'
              anchorPosition={filterMenuPosition}
            >
              <MenuItem onClick={handleFilterMenuItem}>Latest</MenuItem>
              <MenuItem onClick={handleFilterMenuItem}>Popular</MenuItem>
              <MenuItem onClick={handleFilterMenuItem}>Logout</MenuItem>
            </Menu>
          </Box>
        </Stack>
      </Stack>
      <Box>
        <TableContainer
          component={Paper}
          sx={{
            border: 'none',
            borderRadius: 0
          }}
        >
          <Table
            sx={{
              minWidth: 650
            }}
            aria-label='simple table'
          >
            <TableHead sx={{ bgcolor: '#111936' }}>
              <TableRow>
                <TableHeadCell>OwnerID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>OwnerType</TableHeadCell>
                <TableHeadCell>Date of Registartion</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Edit / Delete</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  {/* <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell> */}
                  <TableCell>{row.ownerId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.ownertype}</TableCell>
                  <TableCell>{row.dateofreg}</TableCell>
                  <TableCell>{row.active === 1 ? <ActiveButton /> : <InActiveButton />}</TableCell>
                  <TableCell sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Edit color={'primary'} fontSize={'large'} />
                    </Box>
                    <Box sx={{ margin: '0 1rem' }} onClick={() => handleDelete(row.ownerId)}>
                      <Delete color={'error'} fontSize={'large'} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter
              sx={{
                width: '100% !important'
              }}
            >
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={3}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page'
                  },
                  native: true
                }}
                // onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActions}
                sx={{
                  my: '2rem',
                  width: '100% !important',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  border: 'none'
                }}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
      <Modal openPopup={openModal} setOpenPopup={setOpenModal} title={'Add Admin'}>
        <AddOwner />
      </Modal>
    </Box>
  );
};

export default OwnerManagement;
