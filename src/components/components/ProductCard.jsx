import StarRating from "../elements/StarRating";

const ProductCard = ({ data, setShoppingCart }) => {
  const { title, price, category, image, rating } = data;

  return (
    <div className="col">
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
            onClick={() => setShoppingCart((prev) => [...prev, data])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;