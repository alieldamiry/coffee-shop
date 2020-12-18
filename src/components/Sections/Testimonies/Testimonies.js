import { makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import bgImg from '../../../assets/images/backgrounds/testimony-bg.jpg';
import Testimony from './Testimony';
import person2Img from '../../../assets/images/persons/person_2.jpg';
import person3Img from '../../../assets/images/persons/person_3.jpg';
import person4Img from '../../../assets/images/persons/person_4.jpg';

const useStyles = makeStyles((theme) => ({
  testimony: {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    paddingTop: '4rem',
  },
  title: {
    maxWidth: '600px',
    margin: '0 auto 7rem',
    textAlign: 'center',
    '& h4': {
      color: theme.palette.primary.main,
      marginBottom: '1rem',
      fontWeight: 600,
    },
  },
  description: {
    opacity: 0.7,
  },
  testimonyCards: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

}));

const Testimonies = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.testimony}>
      <div className={classes.title}>
        <Typography component="h4" variant="h4">{t('testimoniesSection.title')}</Typography>
        <Typography className={classes.description}>
          {t('testimoniesSection.description')}
        </Typography>
      </div>
      <div className={classes.testimonyCards}>
        <Testimony
          id={1}
          authorName={t('testimoniesSection.testimonies.0.name')}
          jobTitle={t('testimoniesSection.testimonies.0.jobTitle')}
          profileImg={person2Img}
          text={t('testimoniesSection.testimonies.0.text')}
        />
        <Testimony
          id={2}
          authorName={t('testimoniesSection.testimonies.1.name')}
          jobTitle={t('testimoniesSection.testimonies.1.jobTitle')}
          profileImg={person3Img}
          text={t('testimoniesSection.testimonies.1.text')}
        />
        <Testimony
          id={3}
          authorName={t('testimoniesSection.testimonies.2.name')}
          jobTitle={t('testimoniesSection.testimonies.2.jobTitle')}
          profileImg={person4Img}
          text={t('testimoniesSection.testimonies.2.text')}
        />
        <Testimony
          id={4}
          authorName={t('testimoniesSection.testimonies.3.name')}
          jobTitle={t('testimoniesSection.testimonies.3.jobTitle')}
          profileImg={person2Img}
          text={t('testimoniesSection.testimonies.3.text')}
        />
        <Testimony
          id={5}
          authorName={t('testimoniesSection.testimonies.4.name')}
          jobTitle={t('testimoniesSection.testimonies.4.jobTitle')}
          profileImg={person3Img}
          text={t('testimoniesSection.testimonies.4.text')}
        />
      </div>
    </section>
  );
};

export default Testimonies;
