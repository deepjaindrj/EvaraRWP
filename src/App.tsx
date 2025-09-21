import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';

// Import pages
import LandingPage from './pages/landing/page';
import AboutPage from './pages/about/page';
import ServicesPage from './pages/services/page';
import ProcessPage from './pages/process/page';
import FAQPage from './pages/faq/page';
import ContactPage from './pages/contact/page';
import GalleryPage from './pages/gallery/page';

// Component to handle header visibility logic
function AppContent() {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    if (isLandingPage) {
      // On landing page, hide header initially and show it after animation
      setShowHeader(false);
      const timer = setTimeout(() => {
        setShowHeader(true);
      }, 800); // Same timing as Hero animation
      
      return () => clearTimeout(timer);
    } else {
      // On other pages, show header immediately
      setShowHeader(true);
    }
  }, [isLandingPage]);

  return (
    <div className="min-h-screen">
      {/* Conditionally render Header with animation */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out ${
          showHeader 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full'
        }`}
      >
        <Header />
      </div>
      
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path='/contact' element={<ContactPage/>  } />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;