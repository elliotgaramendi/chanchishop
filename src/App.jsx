import { useEffect, useState } from "react";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import { useProductsStore } from "./store/products.store";

function App() {
  const fetchProducts = useProductsStore(state => state.fetchProducts);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header shoppingCart={shoppingCart} />
      <main className="py-4">
        <Home setShoppingCart={setShoppingCart} />
      </main>
    </>
  );
}

export default App;
