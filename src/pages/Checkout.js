/* eslint-disable no-unused-vars */
import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import PriceSummary from '../components/PriceSummary';

const useStyles = makeStyles(() => ({
  formTitle: {
    marginBottom: '2rem',
  },
  checkout: {
    padding: '4rem 0',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#fff',
  },
  boxContainer: {
    minWidth: '100%',
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Hero>
        <Inner currentPage="Checkout" />
      </Hero>
      <section className={classes.checkout}>
        <Container maxWidth="md">
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8}>
                <Paper>
                  <Box p={4}>
                    <Typography className={classes.formTitle} variant="h5" component="h5">BILLING DETAILS</Typography>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" fullWidth label="First Name" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" fullWidth label="Last Name" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl variant="outlined" fullWidth className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={city}
                            onChange={handleChange}
                            label="City"
                          >
                            {/* <MenuItem value="">
                            <em>None</em>
                          </MenuItem> */}
                            <MenuItem value={10}>Cairo</MenuItem>
                            <MenuItem value={20}>Alexandria</MenuItem>
                            <MenuItem value={30}>Giza</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" fullWidth label="Address" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" fullWidth label="Postcode / ZIP *" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField id="outlined-basic" fullWidth label="Phone" variant="outlined" />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField id="outlined-basic" fullWidth label="Email Address" type="email" variant="outlined" />
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.summaryRow}>
                  <div className={classes.boxContainer}>
                    <PriceSummary />
                    <Button color="primary" variant="contained" fullWidth>Submit</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Checkout;
