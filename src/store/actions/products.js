import axios from 'axios';
import * as actionTypes from './actionTypes';

const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

const fetchProductsFalied = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FALIED,
    error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    axios.get('https://coffe-shop-6d2ae-default-rtdb.firebaseio.com/products.json')
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      }).catch((error) => {
        dispatch(fetchProductsFalied(error));
      });
  };
};
