import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PrimaryLayout;