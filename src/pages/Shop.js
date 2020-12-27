import { useSelector } from 'react-redux';

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  return (
    <div>
      Shop page
    </div>
  );
};

export default Shop;
