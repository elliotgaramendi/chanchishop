import { useEffect } from "react";
import { getProducts } from "./services/products.service";

function App() {

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      console.log(products);
    })();
  }, []);

  return (
    <>
      Chanchishop
    </>
  )
}

export default App
