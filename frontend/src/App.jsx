import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Home/Hero';
import AboutSection from './Components/Home/AboutSection';
import QuickLinks from './Components/Home/QuickLinks';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import Testimonials from './Components/Home/Testimonials';
import Contactpage from './Components/Contact/Contactpage';

import Ndisservicespage from './Components/NDIS/NdisServices'; 

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QuickLinks />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

function Contact() {
  return <Contactpage />;
}

// Wrapper function for NdisServices route
function Ndisserviceswrapper() {
  return <Ndisservicespage />;
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ndis" element={<Ndisserviceswrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
