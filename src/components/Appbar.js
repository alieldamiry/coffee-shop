import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
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

const NavBar = ({ toggleLanguage }) => {
  const classes = useStyles();
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const toggleSideDrawer = () => {
    setShowSideDrawer(true);
  };
  return (
    <Container fixed>
      <AppBar className={classes.appBar} position="fixed">
        <SideDrawer
          toggleLanguage={toggleLanguage}
          showSideDrawer={showSideDrawer}
          setShowSideDrawer={setShowSideDrawer}
        />
        <Toolbar>
          <div className={classes.title}>
            <Logo />
          </div>
          <div className={classes.desktopNavLinks}>
            <NavLinks toggleLanguage={toggleLanguage} />
          </div>
          <IconButton className={classes.menuButton} onClick={toggleSideDrawer} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
NavBar.propTypes = {
  toggleLanguage: PropTypes.func.isRequired,
};
export default NavBar;
