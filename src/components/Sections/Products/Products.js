import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../Product';
import * as actions from '../../../store/actions/products';

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
  const products = useSelector((state) => state.products.products);
  const filteredProducts = products && products.filter((p) => p.category === 'coffee');
  //                               state.products.products.filter((p) => p.category === 'coffee'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);
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
        {products ? filteredProducts.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.name}>
            <Product
              name={p.name}
              image={p.image}
              description={p.description}
              price={p.price}
            />
          </Grid>
        )) : null}
      </Grid>
    </section>
  );
};

export default Products;
