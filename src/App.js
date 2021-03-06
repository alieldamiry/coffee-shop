import { makeStyles } from '@material-ui/core';
import { Switch, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';

const useStyles = makeStyles(() => ({
  App: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
  },
}));
const App = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={location.pathname !== '/cart' ? classes.App : null}>
      <Layout>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/contact" component={Contact} />
          <Route path="/shop/:id" component={SingleProduct} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
