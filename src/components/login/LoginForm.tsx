import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//animation
const easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16
  }
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <Box className='login-wrapper'>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField fullWidth autoComplete='username' type='email' label='Email Address' />

            <TextField
              fullWidth
              autoComplete='current-password'
              type={showPassword ? 'text' : 'password'}
              label='Password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>

          <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={animate}>
            <Box sx={{ my: '1.6rem' }}>
              <FormControlLabel
                control={<Checkbox />}
                label=''
                // color={'text.secondary'}
              />
              <Typography
                color={'text.secondary'}
                sx={{ marginLeft: '-1.5rem', fontSize: '1.5rem' }}
                component={'span'}
              >
                Remember me
              </Typography>
            </Box>
            <LoadingButton fullWidth size='large' type='submit' variant='contained'>
              Login
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
