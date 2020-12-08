import { Grid, makeStyles } from '@material-ui/core';
import bgImg from '../../../assets/images/achievements-bg.jpg';
import Achievement from './Achievement';

const useStyles = makeStyles((theme) => ({
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
    return (
        <section className={classes.achievements}>
            <Grid container>
                <Achievement number={100} title="Coffee Branches" />
                <Achievement number={85} title="Number of Awards" />
                <Achievement number={10567} title="Happy Customer" />
                <Achievement number={900} title="Staff" />
            </Grid>
        </section >
    )
}

export default Achievements;
