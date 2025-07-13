import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Home from './Pages/HomePage/Home';
import Contact from './Pages/ContactPage/contact';
import Catering from './Pages/CateringPage/catering';
import Menu from './Pages/MenuPage/menu';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
