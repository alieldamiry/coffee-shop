
import { Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    content: {
        opacity: 0.5,
        fontSize: 14
    }
}));
const InfoCard = ({ title, icon, content }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={4}>
            <Grid container>
                <Grid item xs={1}>{icon}</Grid>
                <Grid item xs={11}>
                    <Typography variant="h7" component="h7">{title}</Typography>
                    <Typography className={classes.content}>{content}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InfoCard
