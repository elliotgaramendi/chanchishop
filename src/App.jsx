import { useEffect, useState } from "react";
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
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
