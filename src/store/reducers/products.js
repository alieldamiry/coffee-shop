import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null,
  error: false,
  loading: false,
};
const fetchProductsStart = (state) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};
const fetchProductsSuccess = (state, action) => {
  // sort products alphabetically
  const sortedProducts = [...action.products];
  sortedProducts.sort((a, b) => a.name.localeCompare(b.name));

  return {
    ...state,
    loading: false,
    products: sortedProducts,
  };
};
const fetchProductsFalied = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FALIED: return fetchProductsFalied(state, action);
    default: return state;
  }
};

export default reducer;
