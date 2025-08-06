import Header from "../components/layouts/Header";
import ProductsList from "../components/ProductsList";

const Home = ({ products }) => {
  return (
    <>
      <Header />
      <ProductsList data={products} />
    </>
  );
}

export default Home;