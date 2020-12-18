import { Grid, makeStyles, Paper } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import InfoCard from './InfoCard';

const useStyles = makeStyles(() => ({
  IntroInfo: {
    padding: '3%',
    margin: 'auto',
    maxWidth: 900,
  },
}));

const IntroInfo = () => {
  const classes = useStyles();
  return (
    <Paper>
      <section className={classes.IntroInfo}>
        <Grid
          container
          direction="row"
          spacing={2}
        >
          <InfoCard
            icon={<PhoneIcon color="primary" fontSize="small" style={{ marginTop: '3px' }} />}
            title="This is a title"
            content="A small river named Duden flows by their place and supplies."
          />
          <InfoCard
            icon={<MyLocationIcon color="primary" fontSize="small" style={{ marginTop: '3px' }} />}
            title="198 West 21th Street"
            content="203 Fake St. Mountain View, San Francisco, California, USA"
          />
          <InfoCard
            icon={<QueryBuilderIcon color="primary" fontSize="small" style={{ marginTop: '3px' }} />}
            title="Open Monday-Friday"
            content="8:00am - 9:00pm"
          />
        </Grid>
      </section>
    </Paper>
  );
};

export default IntroInfo;
