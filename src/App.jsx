import { useEffect, useState } from "react";
import { getProducts } from "./services/products.service";

function App() {
  const [products, setProducts] = useState([]);

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div>
        {[...Array(fullStars)].map((_, i) => <span key={`full-${i}`}>★</span>)}
        {halfStar && <span>⯨</span>}
        {[...Array(emptyStars)].map((_, i) => <span key={`empty-${i}`}>☆</span>)}
      </div>
    );
  };

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <h2>Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => {
            const { id, title, price, category, image, rating } = product;
            return (
              <div className="col">
                <div key={id} className="card h-100">
                  <img src={image} alt={title} className="object-fit-contain" height={200} />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex align-items-center gap-1">
                      <StarRating rating={rating.rate} />
                      <small>({rating.count})</small>
                    </div>
                    <h5 className="card-title text-primary fw-bold">${price}</h5>
                    <button href={image} className="btn btn-primary mt-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default App
