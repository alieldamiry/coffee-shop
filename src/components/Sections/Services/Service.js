import { Grid, makeStyles } from '@material-ui/core';
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    card: {
        textAlign: 'center',
        padding: '1rem'
    },
    serviceImgContainer: {
        padding: '1rem',
        border: '1px solid #000',
        textAlign: 'center',
        width: 80,
        height: 80,
        margin: '1.7rem auto',
    },
    serviceImg: {
        width: '100%'
    }
}));

const Service = ({ ServiceImg, title }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} className={classes.card}>
            <div className={classes.serviceImgContainer}>
                <img className={classes.serviceImg} src={ServiceImg} alt="" />
            </div>
            <Typography variant="h6" component="h6">EASY TO ORDER</Typography>
            <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
        </Grid>
    )
}

export default Service;
