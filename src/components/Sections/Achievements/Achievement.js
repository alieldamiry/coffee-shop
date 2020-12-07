import { Grid, makeStyles, Typography } from '@material-ui/core';
import { FiCoffee } from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
    parentIcoon: {
        display: 'block',
        position: 'relative',
        width: 80,
        height: 80,
        margin: '20px auto',
        '&:hover span': {
            backgroundColor: theme.palette.primary.main,
            transform: ' rotate(135deg)'
        },
        '&:hover svg': {
            color: '#000'
        }
    },
    achievementGrid: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    iconContainer: {
        display: 'block',
        border: `1px solid ${theme.palette.primary.main}`,
        width: '100%',
        height: '100%',
        margin: 'auto',
        transition: '0.3s',
    },
    icon: {
        color: theme.palette.primary.main,
        position: 'absolute',
        top: '35%',
        left: '35%',
        display: 'block',
        fontSize: '40',
        margin: 'auto',
        transition: '0.3s',
    },
    cardText: {
        '& h5': {
            color: theme.palette.primary.main,
            marginBottom: '0.4rem'
        },
        '& p': {
            opacity: 0.7
        }
    }
}));

const Achievement = ({ number, title }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.achievementGrid} item xs={6} md={3}>
            <div className={classes.parentIcoon}>
                <span className={classes.iconContainer}>
                </span>
                <FiCoffee fontSize={30} className={classes.icon} />
            </div>
            <div className={classes.cardText}>
                <Typography variant="h5" component="h5">{number}</Typography>
                <Typography>{title}</Typography>
            </div>
        </Grid>
    )
}

export default Achievement
