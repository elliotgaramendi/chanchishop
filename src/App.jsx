import { Route, Routes } from 'react-router';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default App
