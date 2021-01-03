import { Grid, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import * as actions from '../store/actions/products';

const useStyles = makeStyles(() => ({
  shop: {
    padding: '4rem 10%',
    color: '#fff',
    textAlign: 'center',
  },
}));

const Shop = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);
  return (
    <section className={classes.shop}>
      <Grid container spacing={5}>
        {products ? products.map((p) => (
          <Grid item xs={12} sm={6} md={3} key={p.name}>
            <Product
              id={p.id}
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

export default Shop;
