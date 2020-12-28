import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/products';

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);
  return (
    <div>
      Shop page
    </div>
  );
};

export default Shop;
