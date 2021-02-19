import * as actionTypes from './actionTypes';

export const addToCart = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    cartProduct,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FORM_CART,
    id,
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: actionTypes.INCREMENT_QAUNTITY,
    productId,
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: actionTypes.DECREMENT_QAUNTITY,
    productId,
  };
};
