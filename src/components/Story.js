
import { makeStyles, Typography } from '@material-ui/core';
import storyImg from '../assets/images/story-bg.jpg';

const useStyles = makeStyles((theme) => ({
    story: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',

        }
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
        }
    },
    content: {
        padding: '8% 13% 8% 5%',
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50%',
        }
    },
    card: {
        color: '#ffffff',
        padding: 40,
        background: 'rgba(0, 0, 0, 0.5)',
        [theme.breakpoints.up('sm')]: {
            marginLeft: -175,
        }
    },
    title: {
        marginBottom: 16,
        fontWeight: 600
    },
    paragraph: {
        opacity: ' 0.5',
        fontSize: 14,
        lineHeight: 2
    },
}));

const Story = () => {
    const classes = useStyles();
    return (
        <section className={classes.story}>
            <div className={classes.storyBg}></div>
            <div className={classes.content}>
                <div className={classes.card}>
                    <Typography className={classes.title} component="h4" variant="h4" color="primary">
                        OUR STORY</Typography>
                    <Typography className={classes.paragraph}>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</Typography>
                </div>
            </div>
        </section>
    )
}

export default Story
