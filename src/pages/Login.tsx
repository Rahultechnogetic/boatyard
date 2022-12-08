import React from 'react';
import { Container, Typography } from '@mui/material';
import LoginForm from '../components/login/LoginForm';
import Logo from '../components/login/Logo';
import { motion } from 'framer-motion';
import { RootStyle, HeadingStyle, ContentStyle } from '../styled/components/Login-styled';

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Login = () => {
  return (
    <RootStyle>
      <Container maxWidth='sm'>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />
            <Typography sx={{ color: 'text.secondary', mb: 5 }}>Login to your account</Typography>
          </HeadingStyle>

          <LoginForm />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant='body2'
            align='center'
            sx={{ mt: 3 }}
          >
            Don’t have an account?{' '}
            <Typography
              variant='subtitle2'
              component={'span'}
              color={'secondary'}
              sx={{ mx: '1rem', fontWeight: 600 }}
            >
              Sign up
            </Typography>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
