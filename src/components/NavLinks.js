import { Badge, Link, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  navLinks: {
    display: 'flex',
    flexFlow: 'column',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexFlow: 'row',
    },
  },
  navLink: {
    fontSize: 13,
    letterSpacing: 2,
    padding: '16px 10px',
    boxSizing: 'border-box',
    display: 'block',
    transition: '0.2s',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      color: '#ffffff',
    },
  },
}));
const NavLinks = () => {
  const classes = useStyles();
  return (

    <nav className={classes.navLinks}>
      <Link to="/" className={classes.navLink}>HOME</Link>
      <Link to="/" className={classes.navLink}>MENU</Link>
      <Link to="/" className={classes.navLink}>SERVICES</Link>
      <Link to="/" className={classes.navLink}>ABOUT</Link>
      <Link to="/" className={classes.navLink}>SHOP</Link>
      <Link to="/" className={classes.navLink}>CONTACT</Link>
      <Link to="/" className={classes.navLink}>
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </nav>
  );
};

export default NavLinks;
