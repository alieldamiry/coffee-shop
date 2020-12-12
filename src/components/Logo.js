import { makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  logo: {
    fontSize: 22,
    lineHeight: 1,
    textTransform: 'uppercase',
    display: 'inline-block',
    color: 'inherit',
    textAlign: 'center',
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (

    <Link to="/" className={classes.logo}>
      {/* <h1>djdkjf</h1> */}
      <div>
        COFFE
      </div>
      <small>SHOP</small>
    </Link>
  );
};

export default Logo;
