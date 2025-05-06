import { Route, Routes } from 'react-router';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
