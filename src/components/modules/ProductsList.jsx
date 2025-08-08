import { useStore } from "../../store/products.store";
import ProductCard from "../components/ProductCard";

const ProductsList = ({ data, setShoppingCart }) => {
  const count = useStore((state) => state.count);

  return (
    <section className="py-5">
      <div className="container">
        <div className="d-flex">
          <h2 className="position-relative">
            Products
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {count}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map(item => <ProductCard key={item.id} data={item} setShoppingCart={setShoppingCart} />)}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;