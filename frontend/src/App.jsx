import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Home/Hero';
import AboutSection from './Components/Home/AboutSection';
import QuickLinks from './Components/Home/QuickLinks';

function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <QuickLinks/>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
