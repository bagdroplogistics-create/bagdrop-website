import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import DestinationsSection from "./components/DestinationsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StatisticsSection from "./components/StatisticsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrackingSection from "./components/TrackingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EnhancedBookingModal from "./components/EnhancedBookingModal";
import FranchiseOpportunities from "./pages/FranchiseOpportunities";
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Careers from "./pages/Careers";


function HomePage({ onBookNow }) {
  return (
    <>
      <TopBar />
      <Header onBookNow={onBookNow} />
      <HeroSlider onBookNow={onBookNow} />
      <AboutSection />
      <DestinationsSection onBookNow={onBookNow} />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <TrackingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
 

    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage onBookNow={handleBookNow} />} />
          <Route path="/franchise-opportunities" element={<FranchiseOpportunities />} />
          <Route path="/careers" element={<Careers />} />
           {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
         <Route path="/refund" element={<Refund />} />
        </Routes>
        <EnhancedBookingModal isOpen={isBookingModalOpen} onClose={handleCloseModal} />
        <Toaster />

        {/* WhatsApp Button */}
      <a
  href="https://wa.link/xuee1a"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000
  }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    alt="WhatsApp"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
    }}
  />
</a>
      </div>
    </Router>
  );
}

export default App;
