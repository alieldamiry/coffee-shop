import { Grid, makeStyles } from '@material-ui/core';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import imgSrc from '../assets/images/drinks/1.jpg';

const useStyles = makeStyles(() => ({
  SingleProduct: {
    padding: '4rem 10%',
    color: '#fff',
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
        <Grid container>
          <Grid item xs={6}>
            <img src={imgSrc} alt="" />
          </Grid>
          <Grid item xs={6}>
            sss
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default SingleProduct;
