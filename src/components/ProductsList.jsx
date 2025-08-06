import StarRating from "./StarRating";

const ProductsList = ({ data, setShoppingCart }) => {
  return (
    <section className="py-5">
      <div className="container">
        <h2>Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => {
            const { id, title, price, category, image, rating } = item;
            return (
              <div key={id} className="col">
                <div className="card h-100">
                  <img src={image} alt={title} className="object-fit-contain" height={200} />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex align-items-center gap-1">
                      <StarRating rating={rating.rate} />
                      <small>({rating.count})</small>
                    </div>
                    <h5 className="card-title text-primary fw-bold">${price}</h5>
                    <button
                      href={image}
                      className="btn btn-primary mt-auto"
                      onClick={() => setShoppingCart((prev) => [...prev, item])}
                    >
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
  );
}

export default ProductsList;