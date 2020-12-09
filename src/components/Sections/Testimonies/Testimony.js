import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    testimonyCard: {
        alignSelf: 'flex-end',
        flexBasis: 0,
        flexGrow: 1,
        lineHeight: 1
    },
    cardbg: {
        backgroundColor: theme.palette.primary.main,
        padding: '2rem',
        // marginBottom: '1rem'
    },
    text: {
        marginBottom: '1rem'
    },
    author: {
        display: 'flex'
    },
    authorImg: {
        width: '40px',
        height: 'auto',
        marginRight: '0.5rem',
        '& img': {
            borderRadius: '100%',
            width: '100%'
        }
    },
    jobTitle: {
        opacity: 0.6,
        fontSize: '0.8rem'
    }
}));

const Testimony = ({ authorName, jobTitle, profileImg, text }) => {
    const classes = useStyles();
    return (
        <div className={classes.testimonyCard}>
            <div className={classes.cardbg}>
                <Typography className={classes.text}>
                    {text}
                </Typography>
                <div className={classes.author}>
                    <div className={classes.authorImg}>
                        <img src={profileImg} alt="" />
                    </div>
                    <div>
                        <Typography>{authorName}</Typography>
                        <Typography className={classes.jobTitle}>Illustrator Designer</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony
