import Achievements from '../components/Sections/Achievements/Achievements';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import Menu from '../components/Sections/Menu/Menu';
import Story from '../components/Sections/Story';
import Testimonies from '../components/Sections/Testimonies/Testimonies';

const About = () => (
  <>
    <Hero>
      <Inner currentPage="About" />
    </Hero>
    <Story />
    <Testimonies />
    <Menu />
    <Achievements />
  </>
);

export default About;
