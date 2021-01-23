import { Button, makeStyles, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  inner: {
    color: ' #ffffff',
    maxWidth: ' 40rem',
    padding: '1rem',
  },
}));

const HomeInner = () => {
  const classes = useStyles();
  return (
    <div className={classes.inner}>
      <Typography variant="h4" component="h3">AMAZING TASTE & BEAUTIFUL PLACE</Typography>
      <p>
        A small river named Duden flows by their place and supplies it
        with the necessary regelialia.
      </p>
      <div>
        <Link component={RouterLink} to="/shop">
          <Button variant="outlined" color="primary">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeInner;
