import { useEffect, lazy, Suspense } from 'react';
import { initGTM } from './lib/gtm';
import GTMNoScript from './components/GTMNoScript';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { trackPageView } from './lib/trackingEvents';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ExamBoards = lazy(() => import('./pages/ExamBoards'));
const HomeSchool = lazy(() => import('./pages/HomeSchool'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const BookTrial = lazy(() => import('./pages/BookTrial'));
const ConsentForm = lazy(() => import('./components/ConsentForm'));
const Terms = lazy(() => import('./pages/Terms'));
const ParentsCorner = lazy(() => import('./pages/ParentsCorner'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
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
              
              {/* Catch all undefined routes and show 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <GTMNoScript />
      </div>
    </Router>
  );
};

export default App;