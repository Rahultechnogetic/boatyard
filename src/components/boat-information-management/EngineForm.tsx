import React from 'react';
import {
  Grid,
  OutlinedInput,
  FormControl,
  Button,
  InputAdornment,
  MenuItem,
  Select
} from '@mui/material';
import { InputLabel, GridItem } from '../../styled/components/ownerManagementStyled';
import { RoundedContainer } from '../../styled/components/common';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const EngineForm = () => {
  return (
    <RoundedContainer sx={{ padding: '2rem !important', margin: '.5rem !important' }}>
      <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <GridItem item lg={4} sm={12} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Make&Model:</InputLabel>
              <OutlinedInput
                id='makeandmodel'
                type='text'
                value={'244542'}
                name='makeandmodel'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder={'make&model'}
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={8} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Frame Number:</InputLabel>
              <OutlinedInput
                id='framenumber'
                type='text'
                value={''}
                name='framenumber'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Engine Number'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Horsepower:</InputLabel>
              <OutlinedInput
                id='horsepower'
                type='text'
                value={''}
                name='horsepower'
                onBlur={() => ''}
                onChange={() => ''}
                endAdornment={
                  <InputAdornment position='end' sx={{ fontStyle: 'italic' }}>
                    hp
                  </InputAdornment>
                }
                placeholder='engine power'
              />
            </FormControl>
          </GridItem>

          <GridItem item lg={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Fule:</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={''}
                label='Age'
                variant='outlined'
              >
                <MenuItem value={10}>regular gasoline</MenuItem>
                <MenuItem value={20}>premium gasoline</MenuItem>
                <MenuItem value={30}>off-road disel</MenuItem>
                <MenuItem value={30}>bunker fuel</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem item lg={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Cooling type:</InputLabel>
              <OutlinedInput
                id='fuletype'
                type='text'
                value={''}
                name='fuletype'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='select fule type'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={6} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Total use hour:</InputLabel>
              <OutlinedInput
                id='horsepower'
                type='text'
                value={''}
                name='horsepower'
                onBlur={() => ''}
                onChange={() => ''}
                endAdornment={
                  <InputAdornment position='end' sx={{ fontStyle: 'italic' }}>
                    hour
                  </InputAdornment>
                }
                placeholder='total  hour'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={12} md={12} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Serial Number:</InputLabel>
              <OutlinedInput
                id='serialnumber'
                type='text'
                value={''}
                minRows={4}
                name='serialnumber'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Engine Serial number'
              />
            </FormControl>
          </GridItem>
          <Stack
            justifyContent={'center'}
            alignItems='center'
            width={'100%'}
            margin='3rem 0 2rem 0'
          >
            <Button
              variant='contained'
              sx={{
                letterSpacing: '.2rem',
                fontWeight: 700,
                fontSize: '1.8rem'
              }}
            >
              <Link to='/boat-information'>submit</Link>
            </Button>
          </Stack>
        </Grid>
      </form>
    </RoundedContainer>
  );
};

export default EngineForm;
