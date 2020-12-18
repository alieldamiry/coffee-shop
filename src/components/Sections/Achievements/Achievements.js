import { Grid, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bgImg from '../../../assets/images/backgrounds/achievements-bg.jpg';
import Achievement from './Achievement';

const useStyles = makeStyles(() => ({
  achievements: {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    padding: '5rem 10%',
  },

}));

const Achievements = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.achievements}>
      <Grid container>
        <Achievement number={100} title={t('achievements.0.title')} />
        <Achievement number={85} title={t('achievements.1.title')} />
        <Achievement number={85} title={t('achievements.2.title')} />
        <Achievement number={85} title={t('achievements.3.title')} />
      </Grid>
    </section>
  );
};

export default Achievements;
