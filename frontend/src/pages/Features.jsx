import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    { title: "Easy Appointment Booking", description: "Book appointments with healthcare providers in just a few clicks", icon: "📅" },
    { title: "Patient Records", description: "Access and manage your medical records securely online", icon: "📋" },
    { title: "Reminders & Notifications", description: "Never miss an appointment with automatic reminders", icon: "🔔" },
    { title: "Secure & Private", description: "Your health data is encrypted and completely secure", icon: "🔒" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">🏥 MediReach</Link>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">← Back to Home</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">Our Features</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover the powerful features that make healthcare management simple and efficient
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Features;
