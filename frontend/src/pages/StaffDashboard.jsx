import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StaffDashboard = () => {
  const todayAppointments = [
    { id: 1, patient: 'John Smith', time: '10:00 AM', type: 'Consultation', status: 'Confirmed' },
    { id: 2, patient: 'Emma Davis', time: '11:30 AM', type: 'Follow-up', status: 'Pending' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Staff Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">👥</div>
              <p className="text-gray-600 text-sm">Total Patients</p>
              <p className="text-3xl font-bold text-sky-600">48</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">📅</div>
              <p className="text-gray-600 text-sm">Today's Appointments</p>
              <p className="text-3xl font-bold text-emerald-600">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">⏰</div>
              <p className="text-gray-600 text-sm">Pending</p>
              <p className="text-3xl font-bold text-amber-600">5</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-3xl font-bold text-violet-600">7</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/add-patient" className="bg-sky-50 p-4 rounded-lg text-center hover:bg-sky-100 transition-colors">
                <div className="text-3xl mb-2">➕</div>
                <p className="font-medium text-gray-800">Add Patient</p>
              </Link>
              <Link to="/schedule-appointment" className="bg-emerald-50 p-4 rounded-lg text-center hover:bg-emerald-100 transition-colors">
                <div className="text-3xl mb-2">📅</div>
                <p className="font-medium text-gray-800">Schedule</p>
              </Link>
              <Link to="/reports" className="bg-violet-50 p-4 rounded-lg text-center hover:bg-violet-100 transition-colors">
                <div className="text-3xl mb-2">📊</div>
                <p className="font-medium text-gray-800">Reports</p>
              </Link>
              <Link to="/settings" className="bg-rose-50 p-4 rounded-lg text-center hover:bg-rose-100 transition-colors">
                <div className="text-3xl mb-2">⚙️</div>
                <p className="font-medium text-gray-800">Settings</p>
              </Link>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Today's Schedule</h2>
            <div className="space-y-4">
              {todayAppointments.map(apt => (
                <div key={apt.id} className="border border-gray-200 p-4 rounded-lg hover:border-sky-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{apt.patient}</h3>
                      <p className="text-gray-600 text-sm">{apt.type}</p>
                      <p className="text-gray-500 text-sm mt-1">{apt.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      apt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaffDashboard;
