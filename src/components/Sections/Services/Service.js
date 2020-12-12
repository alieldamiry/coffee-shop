import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    textAlign: 'center',
    padding: '1rem',
  },
  serviceImgContainer: {
    padding: '1rem',
    border: '1px solid #000',
    textAlign: 'center',
    width: 80,
    height: 80,
    margin: '1.7rem auto',
  },
  serviceImg: {
    width: '100%',
  },
}));

const Service = ({ ServiceImg, title, contnet }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4} className={classes.card}>
      <div className={classes.serviceImgContainer}>
        <img className={classes.serviceImg} src={ServiceImg} alt="" />
      </div>
      <Typography variant="h6" component="h6">{title}</Typography>
      <Typography>{contnet}</Typography>
    </Grid>
  );
};

Service.propTypes = {
  ServiceImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contnet: PropTypes.string.isRequired,
};
export default Service;
