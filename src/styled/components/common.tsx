import styled from '@emotion/styled';
import { Button, Box } from '@mui/material';

export const StyledButton = styled(Button)(() => ({
  fontSize: '1.6rem'
}));

export const RoundedContainer = styled(Box)(() => ({
  background: '#ffffff',
  borderRadius: '.8rem'
}));

export const Container = styled(Box)(() => ({
  background: 'rgb(255,255,255)',
  borderRadius: '1.2rem',
  border: '.1 rem solid',
  borderColor: ' rgba(144, 202, 249, 0.46)'
}));
