import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  productImg: {
    width: '100%',
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

const Product = ({ name, image, description, price }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <div className={classes.product}>
        <div className={classes.productImg}>
          <img src={image} alt={name} />
        </div>
        <Typography className={classes.productTitle} component="h6" variant="h6">{name}</Typography>
        <Typography className={classes.productDescription}>{description}</Typography>
        <Typography>
          $
          {price}
        </Typography>
        <Button className={classes.addBtn}>Add to Cart</Button>
      </div>
    </Grid>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default Product;
