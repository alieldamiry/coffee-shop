import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useReducer } from 'react';
import axios from 'axios';
import CheckoutForm from '../components/CheckoutForm';
import Modal from '../components/Modal';

const useStyles = makeStyles(() => ({
  checkout: {
    padding: '4rem 0',
    color: '#fff',
  },
}));

const initialState = {
  openModal: false,
  loading: false,
  success: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUBMITON_START':
      return {
        ...state,
        loading: true,
      };
    case 'SUBMITON_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        openModal: true,
      };
    case 'SUBMITON_FAIL':
      return {
        ...state,
        loading: false,
        error: true,
        openModal: true,
      };
    default: return state;
  }
};

const Checkout = () => {
  const classes = useStyles();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSubmit = (data) => {
    dispatch({ type: 'SUBMITON_START' });
    axios.post('https://coffe-shop-6d2ae-default-rtdb.firebaseio.com/orders.json',
      { data: { ...data }, orderedProducts: [...cartProducts] })
      .then(() => {
        dispatch({ type: 'SUBMITON_SUCCESS' });
      })
      .catch(() => {
        dispatch({ type: 'SUBMITON_FAIL' });
      });
  };
  return (
    <>
      <section className={classes.checkout}>
        <Modal
          open={state.openModal}
          error={state.error}
          success={state.success}
        />
        <Container maxWidth="md">
          {cartProducts.length > 0 ? (
            <CheckoutForm
              submit={onSubmit}
              loading={state.loading}
            />
          ) : <Redirect to="/shop" />}
        </Container>
      </section>
    </>
  );
};

export default Checkout;
