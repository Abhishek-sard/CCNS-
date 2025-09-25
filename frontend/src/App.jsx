import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Home/Hero';
import AboutSection from './Components/Home/AboutSection';
import QuickLinks from './Components/Home/QuickLinks';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import Testimonials from './Components/Home/testimonials';

function Home() {
  return (
    <>
      <Hero />
      <AboutSection/>
      <QuickLinks/>
      <WhyChooseUs/>
      <Testimonials/>
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
