import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebSolutions from './pages/websolutions';
import Services from './pages/Services';
import DataRecovery from './pages/DataRecovery';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';
import Studio from './pages/Studio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="font-montserrat min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-solution" element={<WebSolutions />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;