import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Stack, TableFooter, TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Sort } from '@material-ui/icons';
import Modal from '../modal/Modal';
import { useState } from 'react';
import AddOwner from './AddOwner';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const TableHeadCell = styled(TableCell)(() => ({
  color: '#fff'
}));
const OwnerManagement = () => {
  // const [page, setPage] = React.useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
          >
            <Sort fontSize='large' color='primary' />
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
                <TableHeadCell>Date of Registartion</TableHeadCell>
                <TableHeadCell>OwnerType&nbsp;(sailboat/motorboat)</TableHeadCell>
                <TableHeadCell>Active/Inactive</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell>Name here</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
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
                count={rows.length}
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
