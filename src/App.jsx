import { Route, Routes } from 'react-router';
import './App.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
    </Routes>
  )
}

export default App
