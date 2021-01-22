import { Link, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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
  },
  activeNavlink: {
    color: `${theme.palette.primary.main}`,
  },
}));
const NavLinks = () => {
  const classes = useStyles();

  return (

    <nav className={classes.navLinks}>
      <Link activeClassName={classes.activeNavlink} className={classes.navLink} exact component={NavLink} to="/">HOME</Link>
      <Link activeClassName={classes.activeNavlink} className={classes.navLink} component={NavLink} to="/services">SERVICES</Link>
      <Link activeClassName={classes.activeNavlink} className={classes.navLink} component={NavLink} to="/about">ABOUT</Link>
      <Link activeClassName={classes.activeNavlink} className={classes.navLink} component={NavLink} to="/shop">SHOP</Link>
      <Link activeClassName={classes.activeNavlink} className={classes.navLink} component={NavLink} to="/contact">CONTACT</Link>
    </nav>
  );
};

export default NavLinks;
