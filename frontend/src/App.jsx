import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Advantage from './Components/Job/Advantage';
import NdisCover from './Components/Service/NdisCover';
import Staffing from './Components/Service/Staffing';
import BlogPage from './Components/Blog/BlogPage';
import CurrentVaccancy from './Components/Job/CurrentVaccancy'
import ApplyOnline from './Components/Job/ApplyOnline';
import Dashboard from './Components/Dashboard/AdminDashboard';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QuickLinks />
      <WhyChooseUs />
      <ImageFile/>
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

function AboutPage() {
  return (
    <>
      <Intro />
      <ImageFile />
      <Animation />
      <Team />
    </>
  )
}

function JobPage() {
  return (
    <>
      <Advantage />


    </>
  )
}

function BlogPageReturn() {
  return (
    <>
      <BlogPage />
    </>
  )
}


const App = () => {
  const role = localStorage.getItem("role");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ndis" element={<Ndisserviceswrapper />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/job" element={<JobPage />} />

        <Route path="/ndiscover" element={<NdisCover />} />
        <Route path="/staffing" element={<Staffing />} />

        <Route path="/blog" element={<BlogPageReturn />} />

        <Route path='/currentvaccancy' element={<CurrentVaccancy />} />
        <Route path='/applyonline' element={<ApplyOnline />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={role === "admin" ? <Dashboard /> : <Navigate to="/" />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
