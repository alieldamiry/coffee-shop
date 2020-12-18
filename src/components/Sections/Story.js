import { makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import storyImg from '../../assets/images/backgrounds/story-bg.jpg';

const useStyles = makeStyles((theme) => ({
  story: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',

    },
  },
  storyBg: {
    // width: '100%',
    height: 333,
    padding: '8% 13% 8% 5%',
    backgroundSize: 'cover',
    backgroundImage: `url(${storyImg})`,
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      height: 'unset',
    },
  },
  content: {
    padding: '8% 13% 8% 5%',
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  card: {
    color: '#ffffff',
    padding: 40,
    background: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.up('sm')]: {
      marginLeft: -175,
    },
  },
  title: {
    marginBottom: 16,
    fontWeight: 600,
  },
  paragraph: {
    opacity: ' 0.5',
    fontSize: 14,
    lineHeight: 2,
  },
}));

const Story = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <section className={classes.story}>
      <div className={classes.storyBg} />
      <div className={classes.content}>
        <div className={classes.card}>
          <Typography className={classes.title} component="h4" variant="h4" color="primary">
            {t('story.title')}
          </Typography>
          <Typography className={classes.paragraph}>
            {t('story.content')}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Story;
