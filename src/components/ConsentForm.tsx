import { useState, useEffect } from 'react';

interface ConsentPreferences {
  marketing_consent: boolean;
  analytics_consent: boolean;
  functional_consent: boolean;
}

const ConsentForm = () => {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    marketing_consent: false,
    analytics_consent: false,
    functional_consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load preferences on component mount
    const initializeConsent = async () => {
      await loadExistingPreferences();
    };

    initializeConsent();
  }, []);

  const loadExistingPreferences = async () => {
    // Load from localStorage
    const localPreferences = localStorage.getItem('consentPreferences');
    if (localPreferences) {
      setPreferences(JSON.parse(localPreferences));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Store in localStorage
      localStorage.setItem('consentPreferences', JSON.stringify(preferences));
      
      setMessage('Your consent preferences have been saved locally.');
      
    } catch (error) {
      console.error('Error saving preferences:', error);
      setMessage('An error occurred while saving your preferences.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Your Privacy Preferences</h2>
      
      <div className="mb-6">
        <p className="text-gray-600">
          We value your privacy and want to be transparent about how we collect and use your data.
          Please review and customize your preferences below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="functional"
                type="checkbox"
                checked={preferences.functional_consent}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  functional_consent: e.target.checked
                }))}
                className="w-4 h-4 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3">
              <label htmlFor="functional" className="font-medium">
                Essential Cookies (Required)
              </label>
              <p className="text-gray-500 text-sm">
                These cookies are necessary for the website to function and cannot be switched off.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="analytics"
                type="checkbox"
                checked={preferences.analytics_consent}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  analytics_consent: e.target.checked
                }))}
                className="w-4 h-4 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="analytics" className="font-medium">
                Analytics Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies allow us to count visits and traffic sources to measure and improve site performance.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="marketing"
                type="checkbox"
                checked={preferences.marketing_consent}
                onChange={(e) => setPreferences(prev => ({
                  ...prev,
                  marketing_consent: e.target.checked
                }))}
                className="w-4 h-4 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="marketing" className="font-medium">
                Marketing Cookies
              </label>
              <p className="text-gray-500 text-sm">
                These cookies may be set by our advertising partners to build a profile of your interests.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>

        {message && (
          <div className={`mt-4 p-4 rounded ${
            message.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {message}
          </div>
        )}
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          For more information about how we use cookies and your personal data, please read our{' '}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ConsentForm; 