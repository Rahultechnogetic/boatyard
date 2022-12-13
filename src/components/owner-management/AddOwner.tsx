import React from 'react';
import {
  Box,
  Grid,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  TextField
} from '@mui/material';
import { makeStyles } from '@material-ui/core';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Textarea } from '@mui/joy';

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
  const theme = useTheme();
  return (
    <Box className={classes.root}>
      <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <Grid item xs={6}>
            <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
              <InputLabel htmlFor='outlined-adornment-email-login'>OwnerID</InputLabel>
              <OutlinedInput
                id='owner-id'
                type='text'
                value={'244542'}
                name='owner-id'
                onBlur={() => ''}
                onChange={() => ''}
                label='OwnerID'
                inputProps={{}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
              <InputLabel htmlFor='outlined-adornment-email-login'>Name</InputLabel>
              <OutlinedInput
                id='owner-name'
                type='text'
                value={''}
                name='owner-name'
                onBlur={() => ''}
                onChange={() => ''}
                label='Name'
                inputProps={{}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
              <InputLabel htmlFor='outlined-adornment-email-login'>Date of Registration</InputLabel>
              <OutlinedInput
                id='date-of-registration'
                type='date'
                value={''}
                name='date-of-registration'
                onBlur={() => ''}
                onChange={() => ''}
                label='Date of Registration'
                inputProps={{}}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
              <InputLabel htmlFor='outlined-adornment-email-login'>Type of Owner</InputLabel>
              <Select
                labelId='Type of Owner'
                id='Type of Onwner'
                value={'select boat owner type'}
                label='Age'
                onChange={() => ''}
              >
                <MenuItem value={10}>Sailboat</MenuItem>
                <MenuItem value={20}>Motorboat</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
            <InputLabel htmlFor='outlined-adornment-email-login'>Address</InputLabel>
            <OutlinedInput
              id='Address'
              type='text'
              value={''}
              multiline={true}
              minRows={4}
              name='Address'
              onBlur={() => ''}
              onChange={() => ''}
              label='Address'
              inputProps={{}}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
            <InputLabel htmlFor='outlined-adornment-email-login'>Contact Detail</InputLabel>
            <OutlinedInput
              id='Contact Detail'
              type='text'
              value={''}
              name='Contact Detail'
              onBlur={() => ''}
              onChange={() => ''}
              label='Contact Detail'
              inputProps={{}}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={false} sx={{ ...theme?.typography?.customInput }}>
            <InputLabel htmlFor='outlined-adornment-email-login'>Images</InputLabel>
            <OutlinedInput
              id='Images'
              type='file'
              value={''}
              name='Images'
              onBlur={() => ''}
              onChange={() => ''}
              label='Images'
              inputProps={{}}
            />
          </FormControl>
        </Grid>
      </form>
    </Box>
  );
};

export default AddOwner;
