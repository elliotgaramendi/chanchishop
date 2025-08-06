import ProductsList from "../components/ProductsList";

const Home = ({ products, setShoppingCart }) => {
  return (
    <>
      <ProductsList data={products} setShoppingCart={setShoppingCart} />
    </>
  );
}

export default Home;