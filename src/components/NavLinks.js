/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
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
    background: 'none',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up('sm')]: {
      color: '#ffffff',
    },
  },
}));

const NavLinks = ({ toggleLanguage }) => {
  const classes = useStyles();
  return (

    <nav className={classes.navLinks}>
      <Link to="/" className={classes.navLink}>HOME</Link>
      <Link to="/" className={classes.navLink}>MENU</Link>
      <Link to="/" className={classes.navLink}>SERVICES</Link>
      <Link to="/" className={classes.navLink}>ABOUT</Link>
      <Link to="/" className={classes.navLink}>SHOP</Link>
      <Link to="/" className={classes.navLink}>CONTACT</Link>
      <div
        className={classes.navLink}
        type="button"
        onClick={toggleLanguage}
      >
        EN
      </div>
      <Link to="/" className={classes.navLink}>
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </nav>
  );
};

NavLinks.propTypes = {
  toggleLanguage: PropTypes.func.isRequired,
};
export default NavLinks;
