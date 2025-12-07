import { useState, useEffect } from 'react';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import GTMNoScript from '@/components/GTMNoScript';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Check } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        setAllowAnalytics(!!savedPreferences.analytics);
        loadScriptsBasedOnConsent(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const loadScriptsBasedOnConsent = (prefs: CookiePreferences) => {
    // Load analytics scripts if consented
    if (prefs.analytics) {
      // Initialize Google Analytics, Clarity, etc.
      import('../../lib/analytics').then(({ initClarity }) => {
        initClarity();
      });
    }

    // Load marketing scripts if consented
    if (prefs.marketing) {
      // Initialize Facebook Pixel, Google Ads, etc.
      // Add your marketing script initialization here
    }

    // Load functional scripts if consented
    if (prefs.functional) {
      // Initialize chat widgets, etc.
      // HubSpot is already loaded in index.html, but you could control it here
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    setAllowAnalytics(true);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    loadScriptsBasedOnConsent(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    setAllowAnalytics(false);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setAllowAnalytics(!!preferences.analytics);
    loadScriptsBasedOnConsent(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="container mx-auto px-4 py-6">
            {!showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">We use cookies</h3>
                  <p className="text-sm text-gray-600">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid gap-4">
                  {[
                    {
                      key: 'necessary' as const,
                      title: 'Necessary Cookies',
                      description: 'Required for the website to function properly.',
                      required: true,
                    },
                    {
                      key: 'analytics' as const,
                      title: 'Analytics Cookies',
                      description: 'Help us understand how visitors interact with our website.',
                      required: false,
                    },
                    {
                      key: 'marketing' as const,
                      title: 'Marketing Cookies',
                      description: 'Used to track visitors across websites for advertising purposes.',
                      required: false,
                    },
                    {
                      key: 'functional' as const,
                      title: 'Functional Cookies',
                      description: 'Enable enhanced functionality like chat widgets.',
                      required: false,
                    },
                  ].map((cookie) => (
                    <div key={cookie.key} className="flex items-start justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{cookie.title}</h4>
                        <p className="text-sm text-gray-600">{cookie.description}</p>
                      </div>
                      <div className="ml-4">
                        {cookie.required ? (
                          <div className="flex items-center text-green-600">
                            <Check className="w-5 h-5" />
                            <span className="ml-1 text-sm">Required</span>
                          </div>
                        ) : (
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={preferences[cookie.key]}
                              onChange={(e) => updatePreference(cookie.key, e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                          </label>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
      {allowAnalytics && (
        <>
          <AnalyticsScripts />
          <GTMNoScript />
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
  const [allowAnalytics, setAllowAnalytics] = useState(false);
