import { useEffect } from "react";
import ProductsList from "../components/modules/ProductsList";
import { useProductsStore } from "../store/products.store";

const Home = ({ setShoppingCart }) => {
  const products = useProductsStore(state => state.products);
  const fetchProducts = useProductsStore(state => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <ProductsList data={products} setShoppingCart={setShoppingCart} />
    </>
  );
}

export default Home;