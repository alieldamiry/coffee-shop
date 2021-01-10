import * as actionTypes from './actionTypes';

export const addToCart = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    cartProduct,
  };
};

export const calculatePrice = () => {
  return {
    type: actionTypes.CALCULATE_PRICE,
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: actionTypes.INCREMENT_QAUNTITY,
    productId,
  };
};
