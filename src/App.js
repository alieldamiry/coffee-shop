import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

const useStyles = makeStyles(() => ({
  App: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
