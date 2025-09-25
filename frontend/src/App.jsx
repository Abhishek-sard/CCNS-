import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Components/Home/Hero';
import AboutSection from './Components/Home/AboutSection';
import QuickLinks from './Components/Home/QuickLinks';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import Testimonials from './Components/Home/Testimonials';
import ContactPage from './Components/Contact/ContactPage';
import NdisServices from './Components/NDIS/NdisServices';
import Intro from './Components/About/Intro';
import ImageFile from './Components/About/ImageFile';
import Animation from './Components/About/Animation';
import Team from './Components/About/Team';
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
  return (
    <>
      <ContactPage />
    </>
  );
}

// Wrapper function for NdisServices route
function Ndisserviceswrapper() {
  return (
    <>
      <NdisServices />
    </>
  )

}

function AboutPage(){
  return(
    <>
    <Intro/>
    <ImageFile/>
    <Animation/>
    <Team/>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ndis" element={<Ndisserviceswrapper />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
