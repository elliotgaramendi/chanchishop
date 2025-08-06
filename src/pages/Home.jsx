import Header from "../components/Header";
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