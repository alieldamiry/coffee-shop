import { createSelector } from 'reselect';

const cartProducts = (state) => state.cart.cartProducts;

export default createSelector(
  cartProducts,
  (products) => products.reduce((prev, cur) => {
    return (prev + cur.price * cur.quantity);
  }, 0).toFixed(2),
);
