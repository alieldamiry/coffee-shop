/* eslint-disable no-unused-vars */
import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
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
  const { register, handleSubmit, errors, control } = useForm();
  useEffect(() => {
    // console.log('errors', errors);
  }, [errors]);

  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <>
      <Hero>
        <Inner currentPage="Checkout" />
      </Hero>
      <section className={classes.checkout}>
        <Container maxWidth="md">
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8}>
                <Paper>
                  <Box p={4}>
                    <Typography className={classes.formTitle} variant="h5" component="h5">BILLING DETAILS</Typography>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="firstName"
                          label="First Name*"
                          id="firstName"
                          helperText={errors.firstName?.message}
                          error={errors.firstName?.message.length > 0}
                          fullWidth
                          variant="outlined"
                          inputRef={register({
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                          })}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="lastName"
                          inputRef={register({
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                          })}
                          id="lastName"
                          error={errors.lastName?.message.length > 0}
                          helperText={errors.lastName?.message}
                          fullWidth
                          label="Last Name*"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Controller
                          name="city"
                          id="city"
                          fullWidth
                          control={control}
                          rules={{
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                          }}
                          error={errors.city?.message.length > 0}
                          defaultValue=""
                          as={(
                            <TextField
                              fullWidth
                              label="City"
                              variant="outlined"
                              helperText={errors.city?.message}
                              select
                            >
                              <MenuItem value="cairo">Cairo</MenuItem>
                              <MenuItem value="giza">Giza</MenuItem>
                              <MenuItem value="alexandria">Alexandria</MenuItem>
                            </TextField>
                            )}
                        />

                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="address"
                          name="address"
                          inputRef={register({
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                          })}
                          error={errors.address?.message.length > 0}
                          helperText={errors.address?.message}
                          fullWidth
                          label="Address"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="zipCode"
                          inputRef={register}
                          id="zipCode"
                          fullWidth
                          label="Postcode / ZIP"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          name="phone"
                          id="phone"
                          fullWidth
                          label="Phone (+20)"
                          variant="outlined"
                          inputRef={register({
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                            pattern: {
                              value: /^-?[0-9]\d*\.?\d*$/i,
                              message: 'invalid phone number',
                            },
                            maxLength: {
                              value: 10,
                              message: 'invalid phone number',
                            },
                            minLength: {
                              value: 10,
                              message: 'invalid phone number',
                            },
                          })}
                          error={errors.phone?.message.length > 0}
                          helperText={errors.phone?.message}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          name="email"
                          type="email"
                          label="Email Address*"
                          id="email"
                          fullWidth
                          inputRef={register({
                            required: {
                              value: true,
                              message: 'This Field is required',
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'invalid email address',
                            },
                          })}
                          variant="outlined"
                          error={errors.email?.message.length > 0}
                          helperText={errors.email?.message}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.summaryRow}>
                  <div className={classes.boxContainer}>
                    <PriceSummary />
                    <Button color="primary" type="submit" variant="contained" fullWidth>Submit</Button>
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
