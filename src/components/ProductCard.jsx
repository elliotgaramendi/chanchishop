import { Link } from "react-router";
import useProductStore from "../store/product.store";

const ProductCard = ({ product }) => {
  const author = useProductStore(state => state.author);
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="col">
      <Link className="card" to={`/products/${id}`}>
        <img src={image} className="card-img-top object-fit-cover" alt={title} height={512} />
        <div className="card-body">
          <h4 className="card-title">{title.slice(0, 64)}</h4>
          <h5 className="card-subtitle mb-2 text-body-secondary">{category} - {rating.rate} ⭐ {rating.count}</h5>
          <h6 className="card-title">{price}</h6>
          <p className="card-text">{description.slice(0, 128)}...</p>
          <span className="badge text-bg-primary">{author}</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;