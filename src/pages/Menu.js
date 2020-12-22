import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import IntroInfo from '../components/Sections/IntroInfo/IntroInfo';

const Menu = () => (
  <>
    <Hero>
      <Inner currentPage="Menu" />
    </Hero>
    <IntroInfo />
  </>
);

export default Menu;
