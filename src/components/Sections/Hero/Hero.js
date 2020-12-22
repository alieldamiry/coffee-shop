import { makeStyles } from '@material-ui/core';
import HeroBg from '../../../assets/images/backgrounds/hero-bg.jpg';

const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${HeroBg})`,
    height: ' 100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));
const Hero = ({ children }) => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      {children}
    </section>
  );
};

export default Hero;
