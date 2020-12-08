import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '5rem 10%',
        background: '#120F0F',
        color: '#fff',
    },
    itemTitle: {
        marginBottom: '1rem'
    },
    itemParagraph: {
        opacity: 0.6,
        marginBottom: '1rem'
    },
    serviceLinks: {
        listStyleType: 'none',
        paddingLeft: 0
    },
    serviceLink: {
        color: '#ffffff',
        opacity: 0.6,
        transition: ' 0.2s',
        '&:hover': {
            opacity: 1
        }
    },
    contact: {
        display: 'flex'
    },
    contactIcon: {
        fontSize: '1.4rem',
        paddingTop: '0.1rem',
        paddingRight: '0.5rem'
    },
    socialIcons: {
        display: 'flex',
    },
    socialIcon: {
        fontSize: '1.5rem',
        marginRight: '1rem'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <Typography className={classes.itemTitle} component="h4" vairant="h4">ABOUT US</Typography>
                    <Typography className={classes.itemParagraph}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
                    <div className={classes.socialIcons}>
                        <FaFacebookF className={classes.socialIcon} />
                        <FaTwitter className={classes.socialIcon} />
                        <FaInstagram className={classes.socialIcon} />
                    </div>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography className={classes.itemTitle} component="h4" vairant="h4">SERVICES</Typography>
                    <ul className={classes.serviceLinks}>
                        <li><Link className={classes.serviceLink}>Cooked</Link></li>
                        <li><Link className={classes.serviceLink}>Deliver</Link></li>
                        <li><Link className={classes.serviceLink}>Quality Foods</Link></li>
                        <li><Link className={classes.serviceLink}>Mixed</Link></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography className={classes.itemTitle} component="h4" vairant="h4">HAVE A QUESTIONS?</Typography>
                    <div className={classes.contact}>
                        <RoomIcon className={classes.contactIcon} />
                        <Typography className={classes.itemParagraph}>203 Fake St. Mountain View, San Francisco, California, Egypt</Typography>
                    </div>
                    <div className={classes.contact}>
                        <PhoneIcon className={classes.contactIcon} />
                        <Typography className={classes.itemParagraph}>+201097034883</Typography>
                    </div>
                    <div className={classes.contact}>
                        <MailIcon className={classes.contactIcon} />
                        <Typography className={classes.itemParagraph}>+201097034883</Typography>
                    </div>
                </Grid>
            </Grid>

        </footer>
    )
}

export default Footer;
