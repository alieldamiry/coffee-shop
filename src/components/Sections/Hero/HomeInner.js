import { Button, makeStyles, Typography } from '@material-ui/core';

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
        <Button variant="contained" color="primary">Shop Now</Button>
        <Button variant="outlined" color="primary">View Menu</Button>
      </div>
    </div>
  );
};

export default HomeInner;
