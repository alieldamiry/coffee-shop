import { Grid, Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  menuImgContainer: {
    // padding: '1rem',
    width: '100%',
  },
  menuImg: {
    width: '100%',
  },
}));

const MenuItem = ({ menuItemImg }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Box p={2}>
        <div className={classes.menuImgContainer}>
          <img className={classes.menuImg} src={menuItemImg} alt="" />
        </div>
      </Box>
    </Grid>
  );
};

MenuItem.propTypes = {
  menuItemImg: PropTypes.string.isRequired,
};

export default MenuItem;
