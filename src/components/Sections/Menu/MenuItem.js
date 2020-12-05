import { Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menuImgContainer: {
        // padding: '1rem',
        width: '100%'
    },
    menuImg: {
        width: '100%'
    },
}))

const MenuItem = ({ menuItemImg }) => {
    const classes = useStyles();
    return (
        <Grid item xs={6}>
            <Box p={2}>
                <div className={classes.menuImgContainer}>
                    <img className={classes.menuImg} src={menuItemImg} alt="" />
                </div>
            </Box>
        </Grid>
    )
}

export default MenuItem
