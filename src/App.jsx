import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Adopta from './pages/Adopta';
import Login from './script'; // Importa Login desde script.js
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adopta" element={<Adopta />} />
        <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
