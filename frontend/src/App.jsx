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
import ImageFile from './Components/About/ImageFile';
import Intro from './Components/About/Intro';
import Animation from './Components/About/Animation';
import Team from './Components/About/Team';
import Advantage from './Components/Job/Advantage';

import NdisCover from './Components/Service/NdisCover';
import Staffing from './Components/Service/Staffing';
import Nursing from './Components/Service/CCNANursingAgency.jsx';
import Assist from './Components/Service/AssistPersonalActivities.jsx';
import LifeStage from './Components/Service/AssistLifeStage.jsx';
import AssistStage from './Components/Service/AssistPersonalActivitiesHigh.jsx';
import Travel from './Components/Service/AssistTravelTransport.jsx';
import CommunityNurse from './Components/Service/CommunityNursingCare.jsx';
import DailyTask from './Components/Service/DailyTasksSharedLiving.jsx';
import DailyLife from './Components/Service/DevelopmentLifeSkills .jsx';
import InvolveCommunity from './Components/Service/InnovCommunityParticipation.jsx';
import HouseholdTasks from './Components/Service/HouseholdTasks.jsx';

import BlogPage from './Components/Blog/BlogPage';
import CurrentVaccancy from './Components/Job/CurrentVaccancy';
import ApplyOnline from './Components/Job/ApplyOnline';
import Dashboard from './Components/Dashboard/AdminDashboard';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import ImageCollection from './Components/Home/ImageCollection';
import AboutUs from './Components/About/AboutUs';
import MainDashboard from './Components/Dashboard/MainDashboard';

import RegisterPage from "./Components/Dashboard/VacancyForm.jsx";
import OnlineFormPage from "./Components/Dashboard/Applied.jsx";
import VacancyPage from "./Components/Dashboard/AdminDashboard.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <QuickLinks />
      <WhyChooseUs />
      <ImageCollection />
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

      <ImageFile />
      <Animation />
      <Team />
      <Intro />
      <AboutUs/>
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
        <Route path='/nursing' element={<Nursing/>}/>
        <Route path='/assist' element={<Assist/>}/>
        <Route path='/lifeStage' element={<LifeStage/>}/>
        <Route path='/stage' element={<AssistStage/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/community' element={<CommunityNurse/>}/>
        <Route path='/dailyTask' element={<DailyTask/>}/>
        <Route path='/development' element={<DailyLife/>}/>
        <Route path='/innovCommunity' element={<InvolveCommunity/>}/>
        <Route path='/household' element={<HouseholdTasks/>}/>

         

        <Route path="/blog" element={<BlogPageReturn />} />

        <Route path='/currentvaccancy' element={<CurrentVaccancy />} />
        <Route path='/applyonline' element={<ApplyOnline />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/dashboard" element={role === "admin" ? <Dashboard /> : <Navigate to="/" />} />



        <Route path="/*" element={<MainDashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/online-form" element={<OnlineFormPage />} />
        <Route path="/vacancy" element={<VacancyPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
