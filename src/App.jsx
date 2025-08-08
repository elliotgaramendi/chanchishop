import { useState } from "react";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <Header shoppingCart={shoppingCart} />
      <main className="py-4">
        <Home setShoppingCart={setShoppingCart} />
      </main>
    </>
  );
}

export default App;
