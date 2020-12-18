import { Grid, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <section className={classes.services}>
      <Grid container className={classes.cardsContainer} direction="row" spacing={0}>
        <Service
          ServiceImg={choices}
          title={t('services.0.title')}
          contnet={t('services.0.content')}
        />
        <Service
          ServiceImg={cargoTruck}
          title={t('services.1.title')}
          contnet={t('services.1.content')}
        />
        <Service
          ServiceImg={coffeeBean}
          title={t('services.2.title')}
          contnet={t('services.2.content')}
        />
      </Grid>
    </section>
  );
};

export default Services;
