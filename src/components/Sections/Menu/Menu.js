import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import menu1 from '../../../assets/images/menu_section_1.jpg';
import menu2 from '../../../assets/images/menu_section_2.jpg';
import menu3 from '../../../assets/images/menu_section_3.jpg';
import menu4 from '../../../assets/images/menu_section_4.jpg';
import MenuItem from "./MenuItem";


const useStyles = makeStyles((theme) => ({
    menu: {
        color: '#ffffff',
        textAlign: 'right',
        padding: '3rem 5%'
    },
    title: {
        marginBottom: '1rem',
        color: theme.palette.primary.main,
        fontWeight: 600
    },

    content: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const Menu = () => {
    const classes = useStyles();
    return (
        <section className={classes.menu}>
            <Grid container>
                <Grid className={classes.content} item md={6}>
                    <Box p={4}>
                        <Box mb={3}>
                            <Typography className={classes.title} variant="h4" component="h4">
                                OUR MENU </Typography>
                            <Typography >
                                Far far away, behind the word mountains, far from the countries Vokalia
                                and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                             </Typography>
                        </Box>
                        <Button variant="outlined" color="primary">View Full Menu</Button>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Grid container>
                        <MenuItem menuItemImg={menu1} />
                        <MenuItem menuItemImg={menu2} />
                        <MenuItem menuItemImg={menu3} />
                        <MenuItem menuItemImg={menu4} />
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default Menu
