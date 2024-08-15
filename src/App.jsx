import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceSection1 from './components/serviceSection1';
import ServiceSection2 from './components/serviceSection2';
import RecentWork from './components/Recentwork';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<ServiceSection1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/recent-work" element={<RecentWork />} />
        <Route path="/service-section-2" element={<ServiceSection2 />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
