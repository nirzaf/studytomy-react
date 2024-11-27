import { useEffect } from 'react';
import { initGTM } from './lib/gtm';
import GTMNoScript from './components/GTMNoScript';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ExamBoards from './pages/ExamBoards';
import HomeSchool from './pages/HomeSchool';
import Career from './pages/Career';
import Contact from './pages/Contact';
import BookTrial from './pages/BookTrial';
import ConsentForm from './components/ConsentForm';
import Terms from './pages/Terms';
import { trackPageView } from './lib/trackingEvents';

// Create a wrapper component to handle page view tracking
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the location changes
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <PageTracker /> 
        <Navbar />
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exam-boards" element={<ExamBoards />} />
            <Route path="/home-school" element={<HomeSchool />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-trial" element={<BookTrial />} />
            <Route path="/consent-preferences" element={<ConsentForm />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <GTMNoScript />
      </div>
    </Router>
  );
};

export default App;