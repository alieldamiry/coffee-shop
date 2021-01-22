import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useLocation, NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  inner: {
    color: ' #ffffff',
    maxWidth: ' 40rem',
    padding: '1rem',
    textTransform: 'uppercase',
  },
  breadcrumbs: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Inner = ({ currentPage }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.inner}>
      <Typography gutterBottom variant="h3" component="h3">{currentPage}</Typography>
      <Breadcrumbs className={classes.breadcrumbs} color="inherit" aria-label="breadcrumb">
        <Link color="inherit" to="/" component={NavLink}>
          Home
        </Link>
        <Link
          to={location.pathname}
          aria-current="page"
          component={NavLink}
        >
          {currentPage}
        </Link>
      </Breadcrumbs>
    </div>
  );
};
Inner.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
export default Inner;
