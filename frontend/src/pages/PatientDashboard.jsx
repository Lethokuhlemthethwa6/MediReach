import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PatientDashboard = () => {
  const appointments = [
    { id: 1, doctor: 'Dr. Sarah Johnson', date: 'March 15, 2024', time: '10:00 AM', type: 'General Checkup', status: 'Confirmed' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Patient Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-gray-600 text-sm">Total Appointments</p>
              <p className="text-3xl font-bold text-sky-600">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-gray-600 text-sm">Upcoming</p>
              <p className="text-3xl font-bold text-emerald-600">3</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold text-violet-600">9</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/book-appointment" className="bg-sky-50 p-4 rounded-lg text-center hover:bg-sky-100 transition-colors">
                <div className="text-3xl mb-2">📅</div>
                <p className="font-medium text-gray-800">Book Appointment</p>
              </Link>
              <Link to="/appointment-history" className="bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors">
                <div className="text-3xl mb-2">📋</div>
                <p className="font-medium text-gray-800">View History</p>
              </Link>
              <Link to="/profile" className="bg-violet-50 p-4 rounded-lg text-center hover:bg-violet-100 transition-colors">
                <div className="text-3xl mb-2">👤</div>
                <p className="font-medium text-gray-800">Profile</p>
              </Link>
              <Link to="/settings" className="bg-rose-50 p-4 rounded-lg text-center hover:bg-rose-100 transition-colors">
                <div className="text-3xl mb-2">⚙️</div>
                <p className="font-medium text-gray-800">Settings</p>
              </Link>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map(apt => (
                  <div key={apt.id} className="border border-gray-200 p-4 rounded-lg hover:border-sky-300 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">{apt.type}</h3>
                        <p className="text-gray-600 text-sm">with {apt.doctor}</p>
                        <p className="text-gray-500 text-sm mt-1">{apt.date} at {apt.time}</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {apt.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No upcoming appointments</p>
                <Link to="/book-appointment" className="text-sky-600 hover:text-sky-700 font-medium mt-2 inline-block">
                  Book your first appointment
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PatientDashboard;
