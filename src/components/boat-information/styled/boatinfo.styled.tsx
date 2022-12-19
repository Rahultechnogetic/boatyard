import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover',
  display: 'inline-block'
});

export const DetailTitle = styled(Typography)({
  fontSize: '1.4rem',
  color: '#232323',
  fontWeight: 600,
  letterSpacing: '.1rem',
  display: 'inline-block'
});

export const DetailContent = styled(Typography)({
  fontSize: '1.4rem',
  fontWeight: 400,
  display: 'inline-block',
  marginLeft: '1rem',
  color: 'gray'
});

export const DetailContainer = styled(Box)({
  margin: '1rem 0'
});

export const Description = styled(Typography)({
  margin: '1rem 0',
  fontSize: '1.5rem '
});
