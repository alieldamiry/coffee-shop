import Menu from '../components/Sections/Menu/Menu';
import Hero from '../components/Hero';
import IntroInfo from '../components/IntroInfo/IntroInfo';
import Services from '../components/Sections/Services/Services';
import Story from '../components/Sections/Story';

const Home = () => {
    return (
        <>
            <Hero />
            <IntroInfo />
            <Story />
            <Services />
            <Menu />
        </>
    )
}

export default Home
