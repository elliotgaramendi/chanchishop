import ProductsList from "../components/ProductsList";

const Home = ({ products }) => {
  return (
    <>
      <ProductsList data={products} />
    </>
  );
}

export default Home;