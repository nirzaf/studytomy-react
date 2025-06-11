import React, { Suspense, lazy, useEffect } from 'react';
import { initGTM } from './lib/gtm';
import GTMNoScript from './components/GTMNoScript';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/common/CookieConsent';
import { trackPageView } from './lib/trackingEvents';
import { HelmetProvider } from 'react-helmet-async';
import { preloadComponents, preloadCriticalResources, preloadComponent, getCachedModule } from './utils/preloader';

// Lazy load page components with preloading capability
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ExamBoards = lazy(() => import('./pages/ExamBoards'));
const HomeSchool = lazy(() => import('./pages/HomeSchool'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const BookTrial = lazy(() => import('./pages/BookTrial'));
const ConsentForm = lazy(() => import('./components/ConsentForm'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Define all page components for preloading
const pageComponents = [
  { name: 'About', loader: () => import('./pages/About'), priority: 'high' as const },
  { name: 'ExamBoards', loader: () => import('./pages/ExamBoards'), priority: 'high' as const },
  { name: 'HomeSchool', loader: () => import('./pages/HomeSchool'), priority: 'medium' as const },
  { name: 'Career', loader: () => import('./pages/Career'), priority: 'medium' as const },
  { name: 'Contact', loader: () => import('./pages/Contact'), priority: 'high' as const },
  { name: 'BookTrial', loader: () => import('./pages/BookTrial'), priority: 'high' as const },
  { name: 'ConsentForm', loader: () => import('./components/ConsentForm'), priority: 'low' as const },
  { name: 'Terms', loader: () => import('./pages/Terms'), priority: 'low' as const },
  { name: 'NotFound', loader: () => import('./pages/NotFound'), priority: 'low' as const }
];

/**
 * Initiates preloading of all page components
 */
const initializePreloading = () => {
  preloadComponents(pageComponents, {
    delay: 150,
    maxConcurrent: 3,
    useIdleCallback: true
  });
};

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
  </div>
);

// Create a wrapper component to handle page view tracking and preloading
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the location changes
    trackPageView(location.pathname);

    // Preload components and resources when home page is visited
    if (location.pathname === '/') {
      // Preload critical resources immediately
      preloadCriticalResources();
      
      // Use setTimeout to avoid blocking the main thread for component preloading
      setTimeout(() => {
        initializePreloading();
      }, 1500); // Delay by 1.5 seconds to let home page load completely
    }
  }, [location]);

  // Also preload on user interaction (hover over navigation links)
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target;
      
      // Check if target is an Element that supports closest method
      if (!target || !(target instanceof Element)) {
        return;
      }
      
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.hostname === window.location.hostname) {
        const path = link.pathname;
        // Trigger preloading for the specific page on hover
         if (path !== location.pathname && !getCachedModule(getComponentNameFromPath(path))) {
           preloadComponentByPath(path);
         }
      }
    };

    // Add event listener to the document for link hover preloading
    document.addEventListener('mouseenter', handleMouseEnter, true);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, [location.pathname]);

  return null;
};

/**
 * Maps URL paths to component names for targeted preloading
 */
const getComponentNameFromPath = (path: string): string => {
  const pathMap: { [key: string]: string } = {
    '/about': 'About',
    '/exam-boards': 'ExamBoards',
    '/home-school': 'HomeSchool',
    '/career': 'Career',
    '/contact': 'Contact',
    '/book-trial': 'BookTrial',
    '/consent-preferences': 'ConsentForm',
    '/terms': 'Terms'
  };
  return pathMap[path] || 'NotFound';
};

/**
 * Preloads a specific component based on the URL path
 */
const preloadComponentByPath = (path: string) => {
  const componentName = getComponentNameFromPath(path);
  
  if (getCachedModule(componentName)) return;

  const component = pageComponents.find(comp => comp.name === componentName);
  if (component) {
    preloadComponent(component, { delay: 0, useIdleCallback: false })
      .then(() => {
        console.log(`🎯 Preloaded on hover: ${componentName}`);
      })
      .catch((error) => {
        console.warn(`⚠️ Failed to preload ${componentName} on hover:`, error);
      });
  }
};

const App = () => {
  useEffect(() => {
    initGTM();
  }, []);

  return (
    <HelmetProvider>
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
          <CookieConsent />
          <GTMNoScript />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;