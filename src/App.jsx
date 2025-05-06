import { Route, Routes } from 'react-router';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';
import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
