import ProductCard from "../components/ProductCard";

const ProductsList = ({ data }) => {

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="position-relative">Products</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map(item => <ProductCard key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;