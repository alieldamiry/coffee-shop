import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  footer: {
    padding: '5rem 10%',
    background: '#120F0F',
    color: '#fff',
  },
  itemTitle: {
    marginBottom: '1rem',
  },
  itemParagraph: {
    opacity: 0.6,
    marginBottom: '1rem',
  },
  serviceLinks: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  serviceLink: {
    color: '#ffffff',
    opacity: 0.6,
    transition: ' 0.2s',
    '&:hover': {
      opacity: 1,
    },
  },
  contact: {
    display: 'flex',
  },
  contactIcon: {
    fontSize: '1.4rem',
    paddingTop: '0.1rem',
    paddingRight: '0.5rem',
  },
  socialIcons: {
    display: 'flex',
  },
  socialIcon: {
    fontSize: '1.5rem',
    marginRight: '1rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <Typography className={classes.itemTitle} component="h4" vairant="h4">{t('footer.about.title')}</Typography>
          <Typography className={classes.itemParagraph}>
            {t('footer.about.content')}
          </Typography>
          <div className={classes.socialIcons}>
            <FaFacebookF className={classes.socialIcon} />
            <FaTwitter className={classes.socialIcon} />
            <FaInstagram className={classes.socialIcon} />
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography className={classes.itemTitle} component="h4" vairant="h4">{t('footer.services.title')}</Typography>
          <ul className={classes.serviceLinks}>
            <li><Link to="/" className={classes.serviceLink}>{t('footer.services.0')}</Link></li>
            <li><Link to="/" className={classes.serviceLink}>{t('footer.services.1')}</Link></li>
            <li><Link to="/" className={classes.serviceLink}>{t('footer.services.2')}</Link></li>
            <li><Link to="/" className={classes.serviceLink}>{t('footer.services.3')}</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography className={classes.itemTitle} component="h4" vairant="h4">{t('footer.info.title')}</Typography>
          <div className={classes.contact}>
            <RoomIcon className={classes.contactIcon} />
            <Typography className={classes.itemParagraph}>
              {t('footer.info.address')}
            </Typography>
          </div>
          <div className={classes.contact}>
            <PhoneIcon className={classes.contactIcon} />
            <Typography className={classes.itemParagraph}>+201097034883</Typography>
          </div>
          <div className={classes.contact}>
            <MailIcon className={classes.contactIcon} />
            <Typography className={classes.itemParagraph}>ali.eldamiry@gmail.com</Typography>
          </div>
        </Grid>
      </Grid>

    </footer>
  );
};

export default Footer;
