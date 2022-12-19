import { Box, Grid } from '@mui/material';
import React from 'react';
import { RoundedContainer } from '../../styled/components/common';
import styled from '@emotion/styled';
import { GridItem } from '../../styled/components/ownerManagementStyled';
import { rawData } from './services.data';
import { useState } from 'react';

const ServiceImageContainer = styled(Box)({});
const ServiceImage = styled('img')({});
const ServiceContent = styled(Box)({});
const ServiceDescription = styled(Box)({});
const GridServiceContainer = styled(GridItem)({});

interface ServiceDataType {
  serviceId: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  subServices: null | object;
  image: string;
}

const ServicesManagement = () => {
  const [data, setData] = useState<ServiceDataType[]>(rawData);
  return (
    <RoundedContainer margin={'2rem 0 '}>
      <Grid container spacing={2}>
        {data.map((service: ServiceDataType) => {
          return (
            <GridServiceContainer key={service.serviceId} item md={6} sm={6} xs={6}>
              <ServiceImageContainer>
                <ServiceImage src='https://images.unsplash.com/photo-1561776620-b183b2c12e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9ja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
              </ServiceImageContainer>
              <ServiceContent>
                <ServiceDescription>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia vitae placeat
                  tenetur enim ea rerum eius ducimus, itaque nam cumque dicta quae eveniet voluptate
                  id fuga ipsum perspiciatis labore molestiae ipsam aspernatur at laudantium
                  quibusdam maxime soluta. Recusandae doloremque at ea vel praesentium culpa, beatae
                  repellendus porro soluta consequatur dignissimos!
                </ServiceDescription>
              </ServiceContent>
            </GridServiceContainer>
          );
        })}
      </Grid>
    </RoundedContainer>
  );
};

export default ServicesManagement;
