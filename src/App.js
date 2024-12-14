import React, { useState, useEffect, useRef } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import './App.css';

import VideoLandingPage from './components/VideoLandingPage';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';









function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<VideoLandingPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;