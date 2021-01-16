import { makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
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

const PriceSummary = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const classes = useStyles();
  return (
    <>
      <div className={classes.totalsBox}>
        <Typography component="h5" variant="h5">
          CART TOTALS
        </Typography>
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
    </>
  );
};

export default PriceSummary;
