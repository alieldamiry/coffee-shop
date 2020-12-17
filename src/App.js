import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import NavBar from './components/Appbar';
import Footer from './components/Sections/Footer/Footer';
import Home from './pages/Home';

function App() {
  const englishLanguage = {
    lang: 'en',
    dir: 'ltr',
  };
  const arabicLanguage = {
    lang: 'ar',
    dir: 'rtl',
  };

  const [language, setLanguage] = useState(englishLanguage);

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('lang', language.lang);
    document.getElementsByTagName('html')[0].setAttribute('dir', language.dir);
  }, [language]);

  const toggleLanguage = () => {
    if (document.getElementsByTagName('html')[0].lang === 'en') {
      setLanguage(arabicLanguage);
    } else {
      setLanguage(englishLanguage);
    }
  };

  return (
    <>
      <ThemeProvider theme={{ ...theme, direction: language.dir }}>
        <NavBar toggleLanguage={toggleLanguage} />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
