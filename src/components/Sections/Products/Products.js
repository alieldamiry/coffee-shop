import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import productImg1 from '../../../assets/images/drinks/1.jpg';
import productImg2 from '../../../assets/images/drinks/2.jpg';
import productImg3 from '../../../assets/images/drinks/3.jpg';
import productImg4 from '../../../assets/images/drinks/4.jpg';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
  Products: {
    padding: '4rem 10%',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    maxWidth: '600px',
    margin: '0 auto 4rem',
    '& h4': {
      color: theme.palette.primary.main,
      marginBottom: '1rem',
      fontWeight: 600,
    },
  },
  description: {
    opacity: 0.7,
  },

}));

const Products = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.Products}>
      <div className={classes.title}>
        <Typography component="h4" variant="h4">{t('productsSection.title')}</Typography>
        <Typography className={classes.description}>
          {t('productsSection.caption')}
        </Typography>
      </div>
      <Grid container spacing={5}>
        <Product
          name={t('productsSection.products.0.name')}
          image={productImg1}
          description={t('productsSection.products.0.description')}
          price={12}
        />
        <Product
          name={t('productsSection.products.0.name')}
          image={productImg2}
          description={t('productsSection.products.0.description')}
          price={10}
        />
        <Product
          name={t('productsSection.products.0.name')}
          image={productImg3}
          description={t('productsSection.products.0.description')}
          price={10}
        />
        <Product
          name={t('productsSection.products.0.name')}
          image={productImg4}
          description={t('productsSection.products.0.description')}
          price={10}
        />
      </Grid>
    </section>
  );
};

export default Products;
