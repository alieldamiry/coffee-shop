import * as actions from '../store/actions/cart';

const onAddToCart = (product, dispatch, cartProducts) => {
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
  dispatch(actions.calculatePrice());
};
export default onAddToCart;
