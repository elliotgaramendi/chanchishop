import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { getProducts } from "./services/products.service";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <Home products={products} />
  );
}

export default App;
