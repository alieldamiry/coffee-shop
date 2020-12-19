import { makeStyles } from '@material-ui/core';
import Layout from './components/Layout';
import Home from './pages/Home';

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
        <Home />
      </Layout>
    </div>
  );
};

export default App;
