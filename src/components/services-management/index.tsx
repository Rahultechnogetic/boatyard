import React from 'react';
import { rawData } from './services.data';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '../../styled/components/common';
import { CardMedia, CardContent, CardActions } from '@mui/material';
import styled from '@emotion/styled';

interface ServiceDataType {
  serviceId: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  subServices: null | object;
  image: string;
}

const ServiceDescription = styled(Typography)({});

const ServicesManagement = () => {
  const [data, setData] = useState<ServiceDataType[]>(rawData);
  return (
    <Box>
      <Grid>
        <Grid item>
          <Container sx={{ padding: '1rem' }}>
            <Grid container>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <CardMedia
                  component='img'
                  height='194'
                  image='https://images.unsplash.com/photo-1561776620-b183b2c12e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  alt='Paella dish'
                  sx={{ objectFit: 'cover' }}
                />
              </Grid>
              <Grid lg={8} md={8} sm={12} xs={12}>
                <CardContent>
                  <ServiceDescription variant='body2' color='text.secondary'>
                    This impressive paella is a perfect party dish and a fun meal to cook together
                    with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </ServiceDescription>
                  <CardActions disableSpacing></CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesManagement;
