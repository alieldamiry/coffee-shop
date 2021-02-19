import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cartProducts: [],
  totalPrice: 0,
};

const addToCart = (state, action) => {
  const updatedProducts = [...state.cartProducts];
  return {
    ...state,
    cartProducts: [...updatedProducts, action.cartProduct],
  };
};

const removeFromCart = (state, action) => {
  let updatedProducts = [...state.cartProducts];
  updatedProducts = updatedProducts.filter((p) => p.id !== action.id);
  return {
    ...state,
    cartProducts: [...updatedProducts],
  };
};

const incrementQuantity = (state, action) => {
  const products = [...state.cartProducts];
  products.filter((p) => p.id === action.productId)[0].quantity += 1;

  return {
    ...state,
    cartProducts: products,
  };
};

const decrementQuantity = (state, action) => {
  const products = [...state.cartProducts];
  products.filter((p) => p.id === action.productId)[0].quantity -= 1;

  return {
    ...state,
    cartProducts: products,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return addToCart(state, action);
    case actionTypes.REMOVE_FORM_CART: return removeFromCart(state, action);
    case actionTypes.INCREMENT_QAUNTITY: return incrementQuantity(state, action);
    case actionTypes.DECREMENT_QAUNTITY: return decrementQuantity(state, action);
    default: return state;
  }
};

export default reducer;
