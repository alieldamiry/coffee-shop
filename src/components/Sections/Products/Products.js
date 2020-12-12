import { Grid, makeStyles, Typography } from '@material-ui/core';
import productImg1 from '../../../assets/images/drinks/1.jpg';
import productImg2 from '../../../assets/images/drinks/2.jpg';
import productImg3 from '../../../assets/images/drinks/3.jpg';
import productImg4 from '../../../assets/images/drinks/4.jpg';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
  Products: {
    padding: '4rem 10%',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    maxWidth: '600px',
    margin: '0 auto 4rem',
    '& h4': {
      color: theme.palette.primary.main,
      marginBottom: '1rem',
      fontWeight: 600,
    },
  },
  description: {
    opacity: 0.7,
  },

}));

const Products = () => {
  const classes = useStyles();
  return (
    <section className={classes.Products}>
      <div className={classes.title}>
        <Typography component="h4" variant="h4">BEST COFFEE SELLERS</Typography>
        <Typography className={classes.description}>
          Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </Typography>
      </div>
      <Grid container spacing={5}>
        <Product
          name="COFFEE CAPUCCINO"
          image={productImg1}
          description="A small river named Duden flows by their place and supplies"
          price={12}
        />
        <Product
          name="COFFEE CAPUCCINO"
          image={productImg2}
          description="A small river named Duden flows by their place and supplies"
          price={10}
        />
        <Product
          name="COFFEE CAPUCCINO"
          image={productImg3}
          description="A small river named Duden flows by their place and supplies"
          price={10}
        />
        <Product
          name="COFFEE CAPUCCINO"
          image={productImg4}
          description="A small river named Duden flows by their place and supplies"
          price={10}
        />
      </Grid>
    </section>
  );
};

export default Products;
