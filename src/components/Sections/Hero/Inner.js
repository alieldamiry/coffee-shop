import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

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

const Inner = ({ currentPage }) => {
  const classes = useStyles();
  return (
    <div className={classes.inner}>
      <Typography gutterBottom variant="h4" component="h3">{currentPage}</Typography>
      <Breadcrumbs className={classes.breadcrumbs} color="inherit" aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link
          href="/menu"
          aria-current="page"
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
