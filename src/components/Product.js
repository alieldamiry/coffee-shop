import { Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  product: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
  productImg: {
    width: '100%',
    cursor: 'pointer',
    '& img': {
      width: '100%',
    },
  },
  productTitle: {
    margin: '0.7rem 0',
  },
  productDescription: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: '1rem',
  },
  addBtn: {
    margin: '1rem',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Product = ({ id, name, image, description, price }) => {
  const classes = useStyles();
  return (
    <div className={classes.product}>
      <Link className={classes.productImg} to={`/shop/${id - 1}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <Typography className={classes.productTitle} component="h6" variant="h6">{name}</Typography>
        <Typography className={classes.productDescription}>{description}</Typography>
      </div>
      <div>
        <Typography>
          $
          {price}
        </Typography>
        <Button className={classes.addBtn}>Add to Cart</Button>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
