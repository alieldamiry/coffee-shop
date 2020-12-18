import { Drawer, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';
import Logo from './Logo';

const useStyles = makeStyles(() => ({
  drawerHeader: {
    textAlign: 'center',
    padding: 46,
    marginBottom: 46,
    borderBottom: '1px solid #2c2c2c',
  },

}));

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={showSideDrawer} onClose={() => setShowSideDrawer(false)}>
      <div style={{ width: '280px' }}>
        <div className={classes.drawerHeader}>
          <Logo />
        </div>
        <NavLinks />
      </div>
    </Drawer>
  );
};

SideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  setShowSideDrawer: PropTypes.func.isRequired,
};
export default SideDrawer;
