import { Button, Container, Link, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import PriceSummary from '../components/PriceSummary';

const useStyles = makeStyles((theme) => ({
  cart: {
    padding: '3rem 0',
    color: '#ffffff',
  },
  table: {
    minWidth: 650,
    '& th, & td': {
      fontSize: '1.1rem',
    },
  },
  tableContainer: {
    maxWidth: 1200,
  },
  tablHead: {
    backgroundColor: theme.palette.primary.main,
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#fff',
  },
  boxContainer: {
    minWidth: 300,
    marginTop: 10,
  },
}));

const Cart = () => {
  const classes = useStyles();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <>
      <section className={classes.cart}>
        {cartProducts.length > 0 ? (
          <Container>
            <TableContainer className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tablHead}>
                  <TableRow>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell align="center">&nbsp;</TableCell>
                    <TableCell align="center">Product&nbsp;</TableCell>
                    <TableCell align="center">Price&nbsp;</TableCell>
                    <TableCell align="center">Quantity&nbsp;</TableCell>
                    <TableCell align="center">Total&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartProducts.map((p) => (
                    <CartProduct
                      key={p.id}
                      id={p.id}
                      image={p.image}
                      name={p.name}
                      price={p.price}
                      quantity={p.quantity}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classes.summaryRow}>
              <div className={classes.boxContainer}>
                <PriceSummary />
                <Link component={RouterLink} to="/checkout">
                  <Button color="primary" variant="contained" fullWidth>
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        ) : <h2 style={{ textAlign: 'center' }}>Your Cart is Empty</h2>}
      </section>
    </>
  );
};
export default Cart;
