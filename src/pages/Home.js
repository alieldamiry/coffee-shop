import Menu from '../components/Sections/Menu/Menu';
import Hero from '../components/Hero';
import IntroInfo from '../components/IntroInfo/IntroInfo';
import Services from '../components/Sections/Services/Services';
import Story from '../components/Sections/Story';
import Achievements from '../components/Sections/Achievements/Achievements';
import Products from '../components/Sections/Products/Products';
import Testimonies from '../components/Sections/Testimonies/Testimonies';

const Home = () => (
  <>
    <Hero />
    <IntroInfo />
    <Story />
    <Services />
    <Menu />
    <Achievements />
    <Products />
    <Testimonies />
  </>
);

export default Home;
