import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(true);
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
          <div className="container d-flex flex-column align-items-center gap-2">
            <h1>Chanchishop</h1>
            {error && (
              <div class="alert alert-danger" role="alert">
                Error fetching products.
              </div>
            )}
            {loading ? (
              <div class="d-flex justify-content-center">
                <div className="spinner-grow text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
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
