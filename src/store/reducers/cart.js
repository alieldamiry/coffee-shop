import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cartProducts: [],
};
const addToCart = (state, action) => {
  // add product to the array if not exists
  if (!state.cartProducts.some((p) => p.id === action.cartProduct.id)) {
    return {
      ...state,
      cartProducts: [...state.cartProducts, action.cartProduct],
    };
  }
  // increment quantity if product in array
  const updatedProducts = [...state.cartProducts];
  const productIndex = updatedProducts.findIndex((p) => p.id === action.cartProduct.id);
  updatedProducts[productIndex].quantity += 1;
  return { ...state, cartProducts: [...updatedProducts] };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return addToCart(state, action);
    default: return state;
  }
};

export default reducer;
