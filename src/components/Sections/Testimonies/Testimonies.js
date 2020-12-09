import { makeStyles } from "@material-ui/core";
import bgImg from '../../../assets/images/backgrounds/testimony-bg.jpg';
import Testimony from "./Testimony";
import person2Img from '../../../assets/images/persons/person_2.jpg';

const useStyles = makeStyles((theme) => ({
    testimony: {
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        padding: '0',
    },
    testimonyCards: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },

}));

const Testimonies = () => {
    const classes = useStyles();
    return (
        <section className={classes.testimony}>
            <div className={classes.testimonyCards}>
                <Testimony profileImg={person2Img} authorName="John Wick" text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small." />
                <Testimony text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar." />
                <Testimony text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name." />
                <Testimony text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however." />
                <Testimony text="“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name." />
            </div>
        </section>
    )
}

export default Testimonies;
