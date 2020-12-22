import { Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  paragraph: {
    opacity: ' 0.5',
    fontSize: 14,
  },
}));
const InfoCard = ({ title, icon, content }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4}>
      <Grid container>
        <Grid item xs={1}>{icon}</Grid>
        <Grid item xs={11}>
          <Typography component="h6">{title}</Typography>
          <Typography className={classes.paragraph}>{content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default InfoCard;
