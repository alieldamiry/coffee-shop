import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';
import Services from '../components/Sections/Services/Services';

const ServicesPage = () => (
  <>
    <Hero>
      <Inner currentPage="Services" />
    </Hero>
    <Services />
  </>
);

export default ServicesPage;
