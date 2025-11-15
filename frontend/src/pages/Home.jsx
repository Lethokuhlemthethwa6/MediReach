import { Link } from 'react-router-dom';

const Home = () => {
  const pages = [
    {
      title: 'Features',
      description: 'Explore our amazing features',
      path: '/features',
      icon: '✨',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'How It Works',
      description: 'Learn how to use our platform',
      path: '/how-it-works',
      icon: '🚀',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      path: '/contact',
      icon: '📧',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Login',
      description: 'Access your account',
      path: '/login',
      icon: '🔐',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Register',
      description: 'Create a new account',
      path: '/register',
      icon: '📝',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Patient Dashboard',
      description: 'Manage your appointments',
      path: '/dashboard',
      icon: '👤',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">🏥 MediReach</h1>
          <p className="text-gray-600 mt-1">Healthcare Management Platform</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to MediReach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete healthcare management solution. Book appointments, manage records, and stay connected with healthcare providers.
          </p>
        </div>

        {/* Navigation Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${page.color}`}></div>
              <div className="p-8">
                <div className="text-6xl mb-4">{page.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {page.title}
                </h3>
                <p className="text-gray-600">{page.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  <span>Explore</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold">SDG 3: Good Health & Well-Being</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
