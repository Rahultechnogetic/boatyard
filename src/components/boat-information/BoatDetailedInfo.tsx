import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { RoundedContainer } from '../../styled/components/common';
import { GridItem } from '../../styled/components/ownerManagementStyled';
import EngineDetail from './EngineDetail';
import {
  Image,
  DetailContainer,
  DetailTitle,
  DetailContent,
  Description
} from './styled/boatinfo.styled';

const BoatDetailedInfo = () => {
  return (
    <RoundedContainer sx={{ padding: '2rem' }}>
      <Grid container spacing={5}>
        <GridItem item md={6} sm={12} xs={12}>
          <Image src='https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
          <Box sx={{ margin: '1rem 0' }}>
            <Typography variant={'h3'} color={'primary'}>
              Description
            </Typography>
            <Divider sx={{ margin: '1rem  0' }} />
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur praesentium at
              consequatur soluta quasi ipsum molestias, veniam esse quaerat harum sed ex excepturi
              fuga. Ratione dicta, voluptate porro amet provident nemo aut voluptates,
              necessitatibus atque repellendus modi quae asperiores, dolore culpa sed debitis iste.
              Accusamus incidunt repellat error autem aspernatur. Tenetur laborum tempore vel unde
              velit iste nemo reiciendis obcaecati fuga, exercitationem eius. Quasi cumque amet
              aliquam aperiam? Tenetur, dolor tempora labore commodi aliquam esse expedita itaque
              quae illum! Saepe facere obcaecati sint a? Itaque quae illum nostrum mollitia pariatur
              in molestias facere hic non! Eaque fugit amet ut.
            </Description>
          </Box>
        </GridItem>
        <GridItem item md={6} sm={12} xs={12} sx={{ padding: '0 1rem' }}>
          <Typography variant={'h3'} color={'primary'}>
            DETAILS
          </Typography>
          <Divider sx={{ margin: '1rem  0' }} />
          <Box>
            <DetailContainer>
              <DetailTitle>Make&Model :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Year :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Depth :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Length :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Weight :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>RegistrationNo :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Shaft :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>SternLight :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Kneel Material :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Body Material :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
            <DetailContainer>
              <DetailTitle>Body SerialNo :</DetailTitle>
              <DetailContent>Volvo505 Penta Motorboat</DetailContent>
            </DetailContainer>
          </Box>
          <EngineDetail />
        </GridItem>
      </Grid>
    </RoundedContainer>
  );
};

export default BoatDetailedInfo;
