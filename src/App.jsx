import Header from "./components/layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="py-4">
        <Home />
      </main>
    </>
  );
}

export default App;
