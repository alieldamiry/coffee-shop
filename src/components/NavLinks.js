import { Badge, Link, makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';

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
      <Link component={RouterLink} to="/" className={classes.navLink}>HOME</Link>
      <Link component={RouterLink} to="/menu" className={classes.navLink}>MENU</Link>
      <Link component={RouterLink} to="/services" className={classes.navLink}>SERVICES</Link>
      <Link component={RouterLink} to="/about" className={classes.navLink}>ABOUT</Link>
      <Link component={RouterLink} to="/shop" className={classes.navLink}>SHOP</Link>
      <Link component={RouterLink} to="/contact" className={classes.navLink}>CONTACT</Link>
      <Link component={RouterLink} to="/cart" className={classes.navLink}>
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </nav>
  );
};

export default NavLinks;
