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

const calculatePrice = (state /* ,action */) => {
  const totalPrice = state.cartProducts.reduce((prev, cur) => {
    return (prev + cur.price * cur.quantity).toFixed(2);
  }, 0);
  return { ...state, totalPrice };
};

const incrementQuantity = (state, action) => {
  const products = [...state.cartProducts];
  console.log(products.filter((p) => p.id === action.productId));
  products.filter((p) => p.id === action.productId)[0].quantity += 1;

  return {
    ...state,
    cartProducts: products,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: return addToCart(state, action);
    case actionTypes.CALCULATE_PRICE: return calculatePrice(state, action);
    case actionTypes.INCREMENT_QAUNTITY: return incrementQuantity(state, action);
    default: return state;
  }
};

export default reducer;
