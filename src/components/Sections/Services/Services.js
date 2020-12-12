import { Grid, makeStyles } from '@material-ui/core';
import coffeeBean from '../../../assets/images/services/coffee-bean.png';
import cargoTruck from '../../../assets/images/services/cargo-truck.png';
import choices from '../../../assets/images/services/choices.png';
import Service from './Service';

const useStyles = makeStyles((theme) => ({
  services: {
    backgroundColor: theme.palette.primary.main,
    padding: '3rem 0',
  },
  cardsContainer: {
    maxWidth: 1100,
    margin: 'auto',
  },

}));

const Services = () => {
  const classes = useStyles();
  return (
    <section className={classes.services}>
      <Grid container className={classes.cardsContainer} direction="row" spacing={0}>
        <Service
          ServiceImg={choices}
          title="EASY TO ORDER"
          contnet="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Service
          ServiceImg={cargoTruck}
          title="FASTEST DELIVERY"
          contnet="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
        <Service
          ServiceImg={coffeeBean}
          title="QUALITY COFFEE"
          contnet="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
        />
      </Grid>
    </section>
  );
};

export default Services;
