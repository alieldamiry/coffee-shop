import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import imgSrc from '../assets/images/drinks/1.jpg';

const useStyles = makeStyles((theme) => ({
  SingleProduct: {
    padding: '4rem 10%',
    color: '#fff',
  },
  price: {
    color: theme.palette.primary.main,
  },
  productImg: {
    width: '100%',
  },
  gutter: {
    marginBottom: '1rem',
  },
  details: {
    opacity: 0.5,
    marginBottom: '1rem',
  },
  wrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
}));

const SingleProduct = () => {
  const classes = useStyles();
  return (
    <>
      <Hero>
        <Inner currentPage="Product Name" />
      </Hero>
      <section className={classes.SingleProduct}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <img className={classes.productImg} src={imgSrc} alt="" />
          </Grid>
          <Grid item xs={6}>
            <div className={classes.wrapper}>
              <div>
                <Typography component="h4" variant="h4" gutterBottom>CREAMY LATTE COFFEE</Typography>
                <Typography className={classes.price} component="h4" variant="h4" gutterBottom>$4.90</Typography>
                <Typography className={classes.details}>
                  A soft drink is a drink that usually contains carbonated water, a sweetener,
                  and a natural or artificial flavoring.
                </Typography>
                <Typography className={classes.details}>
                  On her way she met a copy. The copy warned the Little Blind Text,
                  that where it came from it would have been rewritten a thousand times and
                  everything that was left from its origin would be the word and
                  the Little Blind Text should turn around and return to its own,
                  safe country. But nothing the copy said could
                  convince her and so it didn’t take long until a few insidious Copy Writers
                  ambushed her, made her drunk with Longe and Parole and dragged her into their
                  agency, where they abused her for their.
                </Typography>
                <Button variant="outlined" color="primary">Add To Cart</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default SingleProduct;
