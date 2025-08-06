import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import { getProducts } from "./services/products.service";

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <Header shoppingCart={shoppingCart} />
      <Home products={products} setShoppingCart={setShoppingCart} />
    </>
  );
}

export default App;
