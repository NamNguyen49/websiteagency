import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import WebDesign from "./pages/Services/WebDesign/WebDesign";
import LandingPage from "./pages/Services/WebDesign/LandingPage";
import SEO from "./pages/Services/SEO/SEO";

import FacebookAds from "./pages/Services/Ads/FacebookAds";
import GoogleAds from "./pages/Services/Ads/GoogleAds";
import MarketingAI from "./pages/Services/MarketingAI/MarketingAI";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Background3D from "./components/common/Background3D/Background3D";
import "./assets/styles/global.css";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Background3D />
        <Router>
          <div className="app-wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />

              {/* 4 Dedicated Service Category Pages */}
              <Route
                path="/services/web-design/landing-page"
                element={<LandingPage />}
              />
              <Route
                path="/services/web-design/:subId"
                element={<WebDesign />}
              />
              <Route path="/services/seo/:subId" element={<SEO />} />

              <Route
                path="/services/ads/facebook-ads"
                element={<FacebookAds />}
              />
              <Route path="/services/ads/google-ads" element={<GoogleAds />} />
              {/* Fallback for TikTok or others */}
              <Route
                path="/services/ads/tiktok-ads"
                element={<FacebookAds />}
              />

              <Route
                path="/services/marketing-ai/:subId"
                element={<MarketingAI />}
              />

              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
