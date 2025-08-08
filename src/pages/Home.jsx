import ProductsList from "../components/modules/ProductsList";
import { useProductsStore } from "../store/products.store";

const Home = ({ setShoppingCart }) => {
  const products = useProductsStore(state => state.products);

  return (
    <>
      <ProductsList data={products} setShoppingCart={setShoppingCart} />
    </>
  );
}

export default Home;