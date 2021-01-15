import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import red from '@material-ui/core/colors/red';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/cart';

const useStyles = makeStyles((theme) => ({
  productImg: {
    width: 100,
    margin: 'auto',
    '& img': {
      width: '100%',
    },
  },
  iconButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover svg': {
      color: '#fff',
    },
  },
  quantity: {
    margin: '1rem',
  },
  icon: {
    fontSize: '1.2rem',
  },
  deleteIcon: {
    color: red[900],
  },
  counterGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const CartProduct = ({ id, image, name, price, quantity }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onIncrementQuantity = () => {
    dispatch(actions.incrementQuantity(id));
    dispatch(actions.calculatePrice());
  };

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      dispatch(actions.decrementQuantity(id));
      dispatch(actions.calculatePrice());
    }
  };

  const onRemoveFromCart = () => {
    dispatch(actions.removeFromCart(id));
    dispatch(actions.calculatePrice());
  };

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        <IconButton onClick={onRemoveFromCart}>
          <DeleteIcon title="tss" className={classes.deleteIcon} />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <div className={classes.productImg}>
          <img
            src={image}
            alt={name}
          />
        </div>
      </TableCell>
      <TableCell align="center">
        {name}
      </TableCell>
      <TableCell align="center">
        $
        {price.toFixed(2)}
      </TableCell>
      <TableCell align="center">
        <div className={classes.counterGroup}>
          <IconButton onClick={onDecrementQuantity} className={classes.iconButton}>
            <RemoveRoundedIcon color="primary" className={classes.icon} />
          </IconButton>
          <div className={classes.quantity}>{quantity}</div>
          <IconButton onClick={onIncrementQuantity} className={classes.iconButton}>
            <AddRoundedIcon color="primary" className={classes.icon} />
          </IconButton>
        </div>
      </TableCell>
      <TableCell align="center">
        $
        {(quantity * price).toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default CartProduct;
