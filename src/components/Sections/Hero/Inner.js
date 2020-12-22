import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  inner: {
    color: ' #ffffff',
    maxWidth: ' 40rem',
    padding: '1rem',
  },
  breadcrumbs: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const HomeInner = () => {
  const classes = useStyles();
  return (
    <div className={classes.inner}>
      <Typography gutterBottom variant="h4" component="h3">OUR MENU</Typography>
      <Breadcrumbs className={classes.breadcrumbs} color="inherit" aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link
          href="/menu"
          aria-current="page"
        >
          Menu
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default HomeInner;
