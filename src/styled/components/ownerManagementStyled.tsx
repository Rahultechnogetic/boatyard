import { Box, TableCell, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ActiveButton = styled(Box)(() => ({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  background: '#36D100'
}));

export const InActiveButton = styled(Box)(({ theme }) => ({
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  background: theme.palette.error.main
}));

export const TableHeadCell = styled(TableCell)(() => ({
  color: '#fff'
}));

export const InputLabel = styled(Typography)(() => ({
  fontSize: '1.4rem',
  fontWeight: 500,
  margin: '.8rem  0'
}));

export const GridItem = styled(Grid)(() => ({
  margin: '.2rem 0'
}));
