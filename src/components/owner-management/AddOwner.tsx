import React from 'react';
import {
  Box,
  Grid,
  OutlinedInput,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { InputLabel, GridItem } from '../../styled/components/ownerManagementStyled';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    padding: '2rem ',
    borderRadius: '.8rem',
    margin: '2rem 0'
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1'
  },
  pageTitle: {
    paddingLeft: theme.spacing(4)
  }
}));

const AddOwner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <GridItem item xs={6}>
            <FormControl fullWidth error={false}>
              <InputLabel>OwnerId:</InputLabel>
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
          <GridItem item xs={6}>
            <FormControl fullWidth error={false}>
              <InputLabel>Name:</InputLabel>
              <OutlinedInput
                id='owner-name'
                type='text'
                value={''}
                name='owner-name'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Owner name'
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={6}>
            <FormControl fullWidth error={false}>
              <InputLabel>Date of Registration:</InputLabel>
              <OutlinedInput
                id='date-of-registration'
                type='date'
                value={''}
                name='date-of-registration'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={6}>
            <FormControl fullWidth error={false}>
              <InputLabel>Type of Owner:</InputLabel>
              <Select
                labelId='Type of Owner'
                id='Type of Onwner'
                value={'select boat owner type'}
                onChange={() => ''}
              >
                <MenuItem value={10}>Sailboat</MenuItem>
                <MenuItem value={20}>Motorboat</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Address:</InputLabel>
              <OutlinedInput
                id='Address'
                type='text'
                value={''}
                multiline={true}
                minRows={4}
                name='Address'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Address here'
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Contact Detail:</InputLabel>
              <OutlinedInput
                id='Contact Detail'
                type='text'
                value={''}
                name='Contact Detail'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
                placeholder='Contact Details'
              />
            </FormControl>
          </GridItem>
          <GridItem item xs={12}>
            <FormControl fullWidth error={false}>
              <InputLabel>Images:</InputLabel>
              <OutlinedInput
                id='Images'
                type='file'
                value={''}
                name='Images'
                onBlur={() => ''}
                onChange={() => ''}
                inputProps={{}}
              />
            </FormControl>

            <Box sx={{ my: '1rem' }}>
              <InputLabel>Status:</InputLabel>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='Active'
                name='radio-buttons-group'
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel value='1' control={<Radio />} label='Active' />
                <FormControlLabel value='0' control={<Radio />} label='InActive' />
              </RadioGroup>
            </Box>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default AddOwner;
