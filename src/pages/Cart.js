import { Button, Container, makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import Inner from '../components/Sections/Hero/Inner';
import Hero from '../components/Sections/Hero/Hero';
import CartProduct from '../components/CartProduct';

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
    marginBottom: '2rem',
  },
  tablHead: {
    backgroundColor: theme.palette.primary.main,
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  boxContainer: {
    minWidth: 300,
  },
  totalsBox: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1rem',
  },
  totalPrice: {
    color: theme.palette.primary.light,
  },
  totalRow: {
    display: 'flex',
    padding: '1rem 0',
    opacity: 0.7,
    '& div': {
      flex: 1,
    },
  },
  borderTop: {
    borderTop: '1px solid #fff',
  },
}));

const Cart = () => {
  const classes = useStyles();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <Hero>
        <Inner currentPage="Cart" />
      </Hero>
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
                <div className={classes.totalsBox}>
                  <h2>CART TOTALS</h2>
                  <div className={classes.totalRow}>
                    <div>Subtotal: </div>
                    <div>
                      $
                      {totalPrice}
                    </div>
                  </div>
                  <div className={classes.totalRow}>
                    <div>Tax(10%): </div>
                    <div>
                      $
                      {(0.1 * totalPrice).toFixed(2)}
                    </div>
                  </div>
                  <div className={[classes.totalRow, classes.borderTop].join(' ')}>
                    <div>Total: </div>
                    <div className={classes.totalPrice}>
                      $
                      {(+totalPrice + 0.1 * +totalPrice).toFixed(2)}
                    </div>
                  </div>
                </div>
                <Button color="primary" variant="contained" fullWidth>Checkout</Button>
              </div>
            </div>
          </Container>
        ) : <h2 style={{ textAlign: 'center' }}>Your Cart is Empty</h2>}

      </section>
    </>
  );
};
export default Cart;
