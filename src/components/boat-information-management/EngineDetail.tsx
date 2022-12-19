import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DetailContainer, DetailTitle, DetailContent } from './styled/boatinfo.styled';

import React from 'react';

const EngineDetail = () => {
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <Box>
        <Typography variant={'h3'} color={'primary'}>
          EngineDetail
        </Typography>
        <Divider sx={{ margin: '1rem  0' }} />
        <DetailContainer>
          <DetailTitle>Make&Model :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>FrameNumber :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>HorsePower :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>Fule :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>Cooling Type :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>Total Use Hour :</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
        <DetailContainer>
          <DetailTitle>Serail Number:</DetailTitle>
          <DetailContent>Volvo505 Penta Motorboat</DetailContent>
        </DetailContainer>
      </Box>
    </Box>
  );
};

export default EngineDetail;
