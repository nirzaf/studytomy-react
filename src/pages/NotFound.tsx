import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you're looking for doesn't exist. You'll be redirected to the homepage in 5 seconds.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
