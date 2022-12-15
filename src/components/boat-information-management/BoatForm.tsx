import React from 'react';
import {
  Grid,
  OutlinedInput,
  FormControl,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox
} from '@mui/material';
import { InputLabel, GridItem } from '../../styled/components/ownerManagementStyled';
import { RoundedContainer } from '../../styled/components/common';
import { Stack } from '@mui/system';
const BoatForm = () => {
  return (
    <RoundedContainer sx={{ padding: '2rem !important', margin: '.5rem !important' }}>
      <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <GridItem item lg={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Make&Model:</InputLabel>
              <OutlinedInput
                id='owner-id'
                type='text'
                value={'244542'}
                name='owner-id'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder={'Owner Id'}
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Depth:</InputLabel>
              <OutlinedInput
                id='owner-name'
                type='text'
                value={''}
                name='owner-name'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Depth of the Boat'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={3} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Length:</InputLabel>
              <OutlinedInput
                id='date-of-registration'
                type='text'
                value={''}
                name='date-of-registration'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Length of the Boat'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={3} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Weight:</InputLabel>
              <OutlinedInput
                id='date-of-registration'
                type='text'
                value={''}
                name='date-of-registration'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='weight of  boat'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={3} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Registration Number:</InputLabel>
              <OutlinedInput
                id='Address'
                type='text'
                value={''}
                minRows={4}
                name='Address'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Enter Registartion number'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={3} md={6} sm={6} xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Year of Manufacture:</InputLabel>
              <OutlinedInput
                id='yearofmanufacture'
                type='text'
                value={''}
                minRows={4}
                name='yearofmanufacture'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Year of Manufacture'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>BodySerialNumber:</InputLabel>
              <OutlinedInput
                id='Address'
                type='text'
                value={''}
                minRows={4}
                name='Address'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Body serial number'
              />
            </FormControl>
          </GridItem>

          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Body Material:</InputLabel>
              <OutlinedInput
                id='bodyMaterial'
                type='text'
                value={''}
                name='BodyMaterial'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Enter body Material '
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Home Port:</InputLabel>
              <OutlinedInput
                id='homePort'
                type='text'
                value={''}
                name='homePort'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Home Port'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Mode of transport:</InputLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='Active'
                name='radio-buttons-group'
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <FormControlLabel value='1' control={<Radio />} label='Sliding' />
                <FormControlLabel value='0' control={<Radio />} label='Frame' />
                <FormControlLabel value='0' control={<Radio />} label='Semi Sliding' />
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Base Treatment:</InputLabel>
              <FormGroup defaultChecked={true}>
                <FormControlLabel control={<Checkbox name='Bearing' />} label='Bearing' />
                <FormControlLabel control={<Checkbox name='Quantity' />} label='Quantity' />
              </FormGroup>
            </FormControl>
          </GridItem>
          <GridItem item lg={4}>
            <FormControl fullWidth error={false}>
              <InputLabel>Accessories:</InputLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='Active'
                name='radio-buttons-group'
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <FormControlLabel value='1' control={<Radio />} label='Bucks' />
                <FormControlLabel value='0' control={<Radio />} label='Trailer' />
              </RadioGroup>
            </FormControl>
          </GridItem>

          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Kneel Material:</InputLabel>
              <OutlinedInput
                id='kaneel_material'
                type='text'
                value={''}
                name='kaneel_material'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='kneel material'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Stern Lights:</InputLabel>
              <OutlinedInput
                id='SternLights'
                type='text'
                value={''}
                name='SternLights'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Stren Lights'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={4} md={6} sm={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Shaft:</InputLabel>
              <OutlinedInput
                id='shaft'
                type='text'
                value={''}
                name='shaft'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Shaft info here'
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={6} md={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Mast Information:</InputLabel>
              <OutlinedInput
                id='mastInformation'
                type='text'
                value={''}
                name='mastInformation'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Mast Information'
                multiline={true}
                minRows={4}
              />
            </FormControl>
          </GridItem>
          <GridItem item lg={6} md={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Others:</InputLabel>
              <OutlinedInput
                id='othersinfo'
                type='text'
                value={''}
                name='othersinfo'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='for additional information'
                multiline={true}
                minRows={4}
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
              color='primary'
              sx={{ letterSpacing: '.2rem', fontWeight: 700, fontSize: '1.8rem' }}
            >
              Next Step
            </Button>
          </Stack>
        </Grid>
      </form>
    </RoundedContainer>
  );
};

export default BoatForm;
