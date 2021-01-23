import { Grid, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../store/actions/products';
import Product from '../components/Product';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';

const useStyles = makeStyles(() => ({
  shop: {
    padding: '4rem 10%',
    color: '#fff',
    textAlign: 'center',
  },
  bottomMargin: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
}));

const Shop = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ coffee: false, drinks: false });

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-bitwise
    if (filters.coffee ^ filters.drinks) {
      const category = filters.coffee ? 'coffee' : 'drinks';
      setFilteredProducts(products && products.filter((p) => {
        return p.category === category;
      }));
    } else {
      setFilteredProducts(products);
    }
  }, [filters, products]);

  const handleChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Hero>
        <Inner currentPage="Order Online" />
      </Hero>
      <section className={classes.shop}>
        <FormGroup className={classes.bottomMargin} row>
          <FormControlLabel
            control={(
              <Checkbox
                checked={filters.coffee}
                onChange={handleChange}
                name="coffee"
                color="primary"
              />
            )}
            label="Coffee"
          />
          <FormControlLabel
            control={(
              <Checkbox
                checked={filters.drinks}
                onChange={handleChange}
                name="drinks"
                color="primary"
              />
            )}
            label="Drinks"
          />
        </FormGroup>
        <Grid container spacing={5}>
          {filteredProducts ? filteredProducts.map((p) => (
            <Grid item xs={12} sm={6} md={3} key={p.name}>
              <Product
                id={p.id}
                name={p.name}
                image={p.image}
                description={p.description}
                price={p.price}
              />
            </Grid>
          ))
            : (
              <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
                <CircularProgress />
              </div>
            )}
        </Grid>
      </section>
    </>
  );
};

export default Shop;
