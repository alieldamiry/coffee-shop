import * as actionTypes from './actionTypes';

export const addToCart = (cartProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    cartProduct,
  };
};
