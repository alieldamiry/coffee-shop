import { Badge, Link, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'rgba(0, 0 , 0, 0.7)',
    color: '#ffffff',
    boxShadow: 'none',
  },
  desktopNavLinks: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navLink: {
    padding: '16px 10px',
    display: 'block',
    transition: '0.2s',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  activeNavlink: {
    color: `${theme.palette.primary.main}`,
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = () => {
    setShowSideDrawer(true);
  };
  const products = useSelector((state) => state.cart.cartProducts);
  const countedProducts = products.reduce((prev, cur) => {
    return (prev + cur.quantity);
  }, 0);
  return (
    <Container fixed>
      <AppBar className={classes.appBar} position="fixed">
        <SideDrawer showSideDrawer={showSideDrawer} setShowSideDrawer={setShowSideDrawer} />
        <Toolbar>
          <div className={classes.title}>
            <Logo />
          </div>
          <div className={classes.desktopNavLinks}>
            <NavLinks />
          </div>
          <Link
            activeClassName={classes.activeNavlink}
            className={classes.navLink}
            component={NavLink}
            to="/cart"
          >
            <Badge badgeContent={countedProducts} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
          <IconButton className={classes.menuButton} onClick={toggleSideDrawer} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default NavBar;
