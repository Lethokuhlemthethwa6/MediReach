import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 py-16">
        <div className="max-w-md w-full mx-auto px-6">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">🚫</div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-8">
              You don't have permission to access this page. Please sign in or contact support if you believe this is an error.
            </p>

            <div className="space-y-3">
              <Link 
                to="/" 
                className="block w-full bg-sky-600 text-white font-bold py-3 rounded-lg hover:bg-sky-700 transition-colors duration-200"
              >
                Go to Home
              </Link>
              <Link 
                to="/login" 
                className="block w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-600 hover:text-gray-800 text-sm mt-4"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Unauthorized;
