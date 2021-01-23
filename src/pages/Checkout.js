import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CheckoutForm from '../components/CheckoutForm';

const useStyles = makeStyles(() => ({
  checkout: {
    padding: '4rem 0',
  },
}));

const Checkout = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.checkout}>
        <Container maxWidth="md">
          <CheckoutForm />
        </Container>
      </section>
    </>
  );
};

export default Checkout;
