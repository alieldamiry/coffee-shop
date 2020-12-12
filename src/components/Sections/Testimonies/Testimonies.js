import { makeStyles, Typography } from '@material-ui/core';
import bgImg from '../../../assets/images/backgrounds/testimony-bg.jpg';
import Testimony from './Testimony';
import person2Img from '../../../assets/images/persons/person_2.jpg';
import person3Img from '../../../assets/images/persons/person_3.jpg';
import person4Img from '../../../assets/images/persons/person_4.jpg';
// import person4Img from '../../../assets/images/persons/person_4.jpg';

const useStyles = makeStyles((theme) => ({
  testimony: {
    backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    paddingTop: '4rem',
  },
  title: {
    maxWidth: '600px',
    margin: '0 auto 7rem',
    textAlign: 'center',
    '& h4': {
      color: theme.palette.primary.main,
      marginBottom: '1rem',
      fontWeight: 600,
    },
  },
  description: {
    opacity: 0.7,
  },
  testimonyCards: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

}));

const tesmonies = [
  {
    name: 'John Wick',
    id: 1,
    profileImg: person4Img,
    jobTitle: 'Designer',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.',
  },
  {
    name: 'Louise Kelly',
    id: 2,
    profileImg: person2Img,
    jobTitle: 'CEO of FSG',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
  {
    name: 'Bruce Jack',
    id: 3,
    profileImg: person3Img,
    jobTitle: 'Developer',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ',
  },
  {
    name: 'Ahmed Ali',
    id: 4,
    profileImg: person4Img,
    jobTitle: 'Consultant',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.',
  },
  {
    name: 'Sami Walid',
    id: 5,
    profileImg: person2Img,
    jobTitle: 'Developer',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
  },
];

const Testimonies = () => {
  const classes = useStyles();
  return (
    <section className={classes.testimony}>
      <div className={classes.title}>
        <Typography component="h4" variant="h4">CUSTOMERS SAYS</Typography>
        <Typography className={classes.description}>
          Far far away, behind the word mountains,
          far from the countries Vokalia and Consonantia, there live the blind texts.
        </Typography>
      </div>
      <div className={classes.testimonyCards}>

        {tesmonies.map((person) => (
          <Testimony
            key={person.id}
            id={person.id}
            authorName={person.name}
            jobTitle={person.jobTitle}
            profileImg={person.profileImg}
            text={person.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonies;
