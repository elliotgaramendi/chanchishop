import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <main>
        <section className="py-4">
          <div className="container">
            <h1>Chanchishop</h1>
            {loading ? (
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <ul class="list-group">
                {products.map((product) => (
                  <li class="list-group-item">{product.title}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
