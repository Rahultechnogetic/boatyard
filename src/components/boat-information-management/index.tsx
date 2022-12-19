import { Sort } from '@material-ui/icons';
import { Avatar, IconButton, InputAdornment, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { RoundedContainer } from '../../styled/components/common';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  TableFooter,
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow
} from '@mui/material';
import { TableHeadCell } from '../../styled/components/ownerManagementStyled';
import { Delete, Edit } from '@material-ui/icons';
import { boatInfoData } from './boatinfo.data';
import { Link } from 'react-router-dom';

interface BoatInfoDataTypes {
  id: string;
  make_model: string;
  yearofmanufacture: string;
  engineName: string;
  horsePower: string;
  ownerDetail: {
    imageUrl: string;
    name: string;
  };
}

const BoatInformation = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterMenuPosition, setFilterMenuPosition] = useState<any>(null);
  const [data, setData] = useState<BoatInfoDataTypes[]>(boatInfoData);

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

  // delete a boat record
  const handleDelete = (boatId: string) => {
    const newData = [...data].filter((boat) => {
      return boat.id !== boatId;
    });
    setData(newData);
  };

  return (
    <RoundedContainer sx={{ margin: '2rem !important' }}>
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
              style: { fontFamily: 'Public Sans', color: '#777', width: '100% !important' },
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
            // onClick={() => setOpenModal(true)}
          >
            <Link to='/boat/123'>Add Boat</Link>
          </Button>
          <Box
            className='icon-container'
            sx={{
              bgcolor: 'primary.light',
              marginLeft: '1.6rem',
              border: 0,
              width: '3.4rem !important'
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
            borderRadius: 0,
            overflow: 'auto'
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
                {/* <TableHeadCell>Profile</TableHeadCell> */}
                <TableHeadCell align='left'>Make&Model</TableHeadCell>
                <TableHeadCell>Year</TableHeadCell>
                <TableHeadCell>Engine</TableHeadCell>
                <TableHeadCell>Horse Power</TableHeadCell>
                <TableHeadCell>Owner</TableHeadCell>
                <TableHeadCell>Edit / Delete</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.make_model}>
                  {/* <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell> */}
                  {/* <TableCell>
                    <Avatar src={row.avatarUrl} />
                  </TableCell> */}
                  <TableCell align='left'>{row.make_model}</TableCell>
                  <TableCell align='left'>{row.yearofmanufacture}</TableCell>
                  <TableCell>{row.engineName}</TableCell>
                  <TableCell>{row.horsePower}</TableCell>
                  <TableCell>{row.ownerDetail.name}</TableCell>
                  <TableCell sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Link to='/boat/12323'>
                        <Edit color={'primary'} fontSize={'large'} />
                      </Link>
                    </Box>
                    <Box sx={{ margin: '0 1rem' }} onClick={() => handleDelete(row.id)}>
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
    </RoundedContainer>
  );
};

export default BoatInformation;
