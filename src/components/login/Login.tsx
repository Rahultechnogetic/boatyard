import React from 'react';
import { Box } from '@mui/system';
import './Login.scss';
import { Stack, Typography } from '@mui/material';

const Login = () => {
  return (
    <Stack className='login-container' direction={'row'}>
      <Box className='image-wrapper'>
        <Typography component={'h1'} fontSize='6rem'>
          Welcome Back
        </Typography>
      </Box>
      <Box className='login-wrapper'></Box>
    </Stack>
  );
};

export default Login;
