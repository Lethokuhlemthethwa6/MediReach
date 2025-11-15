import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    return user.role === 'staff' || user.role === 'admin' ? '/staff' : '/dashboard';
  };

  return (
    <nav className="glass sticky top-0 z-50 shadow-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Modern with Gradient */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏥</span>
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediReach
              </span>
              <p className="text-xs text-slate-500 -mt-1 font-medium">Healthcare Simplified</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {user ? (
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                to={getDashboardLink()}
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 flex items-center gap-2"
              >
                <span>📊</span>
                <span>Dashboard</span>
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
              >
                Contact
              </Link>
              <button
                onClick={handleLogout}
                className="ml-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200">
                Home
              </Link>
              <Link to="/features" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200">
                Features
              </Link>
              <Link to="/how-it-works" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200">
                How It Works
              </Link>
              <Link to="/contact" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200">
                Contact
              </Link>
              <Link to="/login" className="ml-2 px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200">
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button - Modern Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg hover:bg-blue-50 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-slate-700 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-700 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-slate-700 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Slide Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-4 space-y-1 pb-4 border-t border-white/20 pt-4">
            {user ? (
              <>
                <Link 
                  to={getDashboardLink()}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 flex items-center gap-2"
                >
                  <span>📊</span>
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                >
                  Contact
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                >
                  Home
                </Link>
                <Link 
                  to="/features" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                >
                  Features
                </Link>
                <Link 
                  to="/how-it-works" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                >
                  How It Works
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200"
                >
                  Contact
                </Link>
                <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-center shadow-md mt-2"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
