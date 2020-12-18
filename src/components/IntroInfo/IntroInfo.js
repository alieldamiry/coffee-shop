import { Grid, makeStyles, Paper } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
            title={t('introInfo.0.title')}
            content={t('introInfo.0.content')}
          />
          <InfoCard
            icon={<MyLocationIcon color="primary" fontSize="small" style={{ marginTop: '3px' }} />}
            title={t('introInfo.1.title')}
            content={t('introInfo.1.content')}
          />
          <InfoCard
            icon={<QueryBuilderIcon color="primary" fontSize="small" style={{ marginTop: '3px' }} />}
            title={t('introInfo.2.title')}
            content={t('introInfo.2.content')}
          />
        </Grid>
      </section>
    </Paper>
  );
};

export default IntroInfo;
