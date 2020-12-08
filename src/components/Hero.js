import { Button, makeStyles, Typography } from "@material-ui/core"
import HeroBg from "../assets/images/backgrounds/hero-bg.jpg";

const useStyles = makeStyles((theme) => ({
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
        textAlign: 'center'
    },
    inner: {
        color: ' #ffffff',
        maxWidth: ' 40rem',
        padding: '1rem'
    }

}));
const Hero = () => {
    const classes = useStyles();

    return (
        <div className={classes.hero}>
            <div className={classes.inner}>
                <Typography variant="h4" component="h3">AMAZING TASTE & BEAUTIFUL PLACE</Typography>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div>
                    <Button variant="contained" color="primary">Shop Now</Button>
                    <Button variant="outlined" color="primary">View Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
