import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/cart';

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
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  useEffect(() => {
    axios.get(`https://coffe-shop-6d2ae-default-rtdb.firebaseio.com/products/${id}.json`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        // console.log(err);
      });
  }, []);

  const onAddToCart = () => {
    if (!cartProducts.some((p) => p.id === product.id)) {
      dispatch(actions.addToCart(
        {
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ));
    } else {
      dispatch(actions.incrementQuantity(product.id));
    }
  };
  return (
    <>
      {/* <Hero>
        <Inner currentPage={product?.name} />
      </Hero> */}
      {product ? (
        <section className={classes.SingleProduct}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <img className={classes.productImg} src={product.image} alt={product.name} />
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.wrapper}>
                <div>
                  <Typography component="h4" variant="h4" gutterBottom>{product.title}</Typography>
                  <Typography className={classes.price} component="h4" variant="h4" gutterBottom>
                    $
                    {product.price}
                  </Typography>
                  <Typography className={classes.details}>
                    {product.description}
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
                  <Button variant="outlined" color="primary" onClick={onAddToCart}>Add To Cart</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>
      ) : null}
    </>
  );
};

export default SingleProduct;
