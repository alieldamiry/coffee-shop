import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';

const useStyles = makeStyles((theme) => ({
  contact: {
    color: '#fff',
    padding: '7rem 0',
    fontSize: '80%',
  },
  gutterbottom: {
    marginBottom: '1.5rem',
  },
  primaryColor: {
    color: theme.palette.primary.light,
  },
  submitBtn: {
    padding: '1rem 3rem',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Hero>
        <Inner currentPage="Contact Us" />
      </Hero>
      <section className={classes.contact}>
        <Container maxWidth="md">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Typography className={classes.gutterbottom} variant="h6" component="h6">Contact Information</Typography>
              <Typography className={classes.gutterbottom}>
                Address:
                <span style={{ opacity: '0.5' }}> 198 West 21th Street, Suite 721 New York NY 10016</span>
              </Typography>
              <Typography className={classes.gutterbottom}>
                Phone:
                <span className={classes.primaryColor}> + 1235 2355 98</span>
              </Typography>
              <Typography className={classes.gutterbottom}>
                Email:
                <span className={classes.primaryColor}> info@yoursite.com</span>
              </Typography>
              <Typography className={classes.gutterbottom}>
                Website:
                <span className={classes.primaryColor}> yoursite.com</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form action="\">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="primary"
                      id="name"
                      name="name"
                      label="Your Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      color="primary"
                      required
                      id="email"
                      type="email"
                      name="email"
                      label="Your Email"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      color="primary"
                      id="message"
                      name="message"
                      multiline
                      rows="6"
                      label="Write Your message"
                      fullWidth
                    />
                  </Grid>
                  <Grid item>
                    <Button className={classes.submitBtn} variant="contained" color="primary">Send Message</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.625776984116!2d31.008027999299667!3d30.02602730429367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585ba897ccfe3b%3A0x15d82d85f637331c!2sHyper%20One!5e0!3m2!1sen!2seg!4v1608647979465!5m2!1sen!2seg" frameBorder="0" style={{ border: '0', width: '100%', height: '50vh' }} allowFullScreen="" aria-hidden="false" />
    </>
  );
};

export default Contact;
