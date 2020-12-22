import Menu from '../components/Sections/Menu/Menu';
import Hero from '../components/Sections/Hero/Hero';
import HomeInner from '../components/Sections/Hero/HomeInner';
import IntroInfo from '../components/IntroInfo/IntroInfo';
import Services from '../components/Sections/Services/Services';
import Story from '../components/Sections/Story';
import Achievements from '../components/Sections/Achievements/Achievements';
import Products from '../components/Sections/Products/Products';
import Testimonies from '../components/Sections/Testimonies/Testimonies';

const Home = () => (
  <>
    <Hero>
      <HomeInner />
    </Hero>
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
