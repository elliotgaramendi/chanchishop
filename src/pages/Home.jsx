import ProductsList from "../components/ProductsList";

const Home = ({ products }) => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Welcome to Chanchishop</h1>
      </div>
      <ProductsList data={products} />
    </>
  );
}

export default Home;