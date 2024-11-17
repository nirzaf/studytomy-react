export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 mb-2">
            Powered by{' '}
            <a 
              href="https://quadrate.lk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition"
            >
              Quadrate TechSolutions
            </a>
          </p>
          <p className="text-gray-600 mb-2">
            <a 
              href="terms-and-conditions.html"
              className="text-gray-600 hover:text-orange-500 transition"
            >
              Terms of Service
            </a>
            {' '}of EduConnect
          </p>
          <a 
            href="consent-form.html" 
            className="text-gray-600 hover:text-orange-500 transition termly-display-preferences"
          >
            Consent Preferences
          </a>
        </div>
      </div>
    </footer>
  );
}