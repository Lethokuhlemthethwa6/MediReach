import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 px-6 py-12 mt-auto overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MediReach
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Bridging healthcare gaps with modern technology for a healthier tomorrow.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <span>🎯</span>
              <span className="font-semibold">SDG 3: Good Health</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-400">⚡</span>
              <span>Quick Links</span>
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                → Home
              </Link>
              <Link to="/features" className="block text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                → Features
              </Link>
              <Link to="/how-it-works" className="block text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                → How It Works
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all duration-200">
                → Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">💬</span>
              <span>Contact</span>
            </h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <a href="mailto:support@medireach.com" className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-200">
                <span className="text-lg">📧</span>
                <span>support@medireach.com</span>
              </a>
              <a href="tel:+254700123456" className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-200">
                <span className="text-lg">📞</span>
                <span>+254 700 123 456</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">🌐</span>
              <span>Connect</span>
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-blue-500 hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-sky-400 hover:scale-110 transition-all duration-200"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-blue-600 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl hover:bg-pink-500 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
            <p className="text-slate-400 text-xs">
              Follow us for health tips and updates
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} MediReach. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
