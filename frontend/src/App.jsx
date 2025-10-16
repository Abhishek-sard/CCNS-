import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Home Components
import Hero from './Components/Home/Hero';
import AboutSection from './Components/Home/AboutSection';
import QuickLinks from './Components/Home/QuickLinks';
import WhyChooseUs from './Components/Home/WhyChooseUs';
import Testimonials from './Components/Home/Testimonials';
import ImageCollection from './Components/Home/ImageCollection';

// About Components
import ImageFile from './Components/About/ImageFile';
import Intro from './Components/About/Intro';
import Animation from './Components/About/Animation';
import AboutUs from './Components/About/AboutUs';
import Team from './Components/About/Team';
import BranchesList from './Components/About/BranchesList';
import ContactPage from './Components/Contact/ContactPage';

// NDIS & Services
import NdisServices from './Components/NDIS/NdisServices';
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
import ParticipateCommunity from './Components/Service/ParticipateCommunity.jsx';
import SupportCoordination from './Components/Service/SupportCoordination.jsx';
import GroupCentreActivities from './Components/Service/GroupCentreActivities.jsx';

// Job & Blog
import Advantage from './Components/Job/Advantage';
import CurrentVacancy from './Components/Job/CurrentVaccancy';
import VacancyDetails from './Components/Job/VacancyDetails.jsx';
import ApplyOnline from './Components/Job/ApplyOnline';
import BlogPage from './Components/Blog/BlogPage';
import BlogDetails from './Components/Blog/BlogDetail.jsx';

// Auth
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

// Dashboard Components
import MainDashboard from './Components/Dashboard/MainDashboard';
import VacancyForm from './Components/Dashboard/AdminDashboard.jsx';
import Applied from './Components/Dashboard/Applied.jsx';
import BlogManagement from './Components/Dashboard/BlogManagement.jsx';
import TeamManagement from './Components/Dashboard/TeamManagement.jsx';
import StaffingManagement from './Components/Dashboard/StaffingManagement.jsx';
import BranchManagement from './Components/Dashboard/BranchManagement.jsx';

// Utils
import './utils/consoleCleanup';

// ------------------------------
// PAGE WRAPPERS
// ------------------------------
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

function AboutPage() {
  return (
    <>
      <ImageFile />
      <Animation />
      <Intro />
      <AboutUs />
      <Team />
      <BranchesList />
    </>
  );
}

// Hide Navbar/Footer for Dashboard Pages
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

// ------------------------------
// MAIN APP ROUTES
// ------------------------------
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <LayoutWrapper>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ndis" element={<NdisServices />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/job" element={<Advantage />} />

            {/* Services */}
            <Route path="/ndiscover" element={<NdisCover />} />
            <Route path="/staffing" element={<Staffing />} />
            <Route path="/nursing" element={<Nursing />} />
            <Route path="/assist" element={<Assist />} />
            <Route path="/lifeStage" element={<LifeStage />} />
            <Route path="/stage" element={<AssistStage />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/community" element={<CommunityNurse />} />
            <Route path="/dailyTask" element={<DailyTask />} />
            <Route path="/development" element={<DailyLife />} />
            <Route path="/innovCommunity" element={<InvolveCommunity />} />
            <Route path="/household" element={<HouseholdTasks />} />
            <Route path="/participation" element={<ParticipateCommunity />} />
            <Route path="/support" element={<SupportCoordination />} />
            <Route path="/center" element={<GroupCentreActivities />} />

            {/* Blog & Job */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/currentvacancy" element={<CurrentVacancy />} />
            <Route path="/vacancy/:id" element={<VacancyDetails />} />
            <Route path="/applyonline" element={<ApplyOnline />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ============================
                 ADMIN DASHBOARD ROUTES
            ============================ */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <MainDashboard />
                </ProtectedRoute>
              }
            >
              <Route path="online-form" element={<Applied />} />
              <Route path="vacancy" element={<VacancyForm />} />
              <Route path="blog" element={<BlogManagement />} />
              <Route path="team" element={<TeamManagement />} />
              <Route path="staffing" element={<StaffingManagement />} />
              <Route path="branches" element={<BranchManagement />} />
            </Route>
          </Routes>
        </LayoutWrapper>
      </Router>
    </AuthProvider>
  );
};

export default App;
