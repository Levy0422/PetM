// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Adopta from './pages/Adopta';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/adopta" element={<Adopta />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
