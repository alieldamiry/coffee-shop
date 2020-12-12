import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import NavBar from './components/Appbar';
import Footer from './components/Sections/Footer/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
