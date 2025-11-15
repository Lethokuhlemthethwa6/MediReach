import { useState, useEffect } from 'react';
import { createAppointment, updateAppointment } from '../services/appointments';
import { Calendar, Clock, Stethoscope, FileText, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const DEPARTMENTS = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology',
  'Psychiatry',
  'General Medicine',
  'Surgery',
  'Oncology',
  'Radiology'
];

const AppointmentForm = ({ appointment, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    doctor: '',
    department: '',
    date: '',
    time: '',
    reason: '',
    notes: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (appointment) {
      setFormData({
        doctor: appointment.doctor || '',
        department: appointment.department || '',
        date: appointment.date ? new Date(appointment.date).toISOString().split('T')[0] : '',
        time: appointment.time || '',
        reason: appointment.reason || '',
        notes: appointment.notes || ''
      });
    }
  }, [appointment]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      if (appointment) {
        await updateAppointment(appointment._id, formData);
      } else {
        await createAppointment(formData);
      }
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start space-x-3 animate-fade-in">
          <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start space-x-3 animate-fade-in">
          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-green-700 text-sm">
            {appointment ? 'Appointment updated successfully!' : 'Appointment booked successfully!'}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Doctor Name */}
        <div className="space-y-2">
          <label htmlFor="doctor" className="block text-sm font-semibold text-slate-700">
            Doctor Name <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Stethoscope className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <input
              type="text"
              id="doctor"
              name="doctor"
              required
              value={formData.doctor}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-3.5"
              placeholder="Dr. Smith"
            />
          </div>
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label htmlFor="department" className="block text-sm font-semibold text-slate-700">
            Department <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FileText className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <select
              id="department"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-3.5"
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-semibold text-slate-700">
            Date <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Calendar className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="input-modern w-full pl-12 pr-4 py-3.5"
            />
          </div>
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-semibold text-slate-700">
            Time <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Clock className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="input-modern w-full pl-12 pr-4 py-3.5"
            />
          </div>
        </div>

        {/* Reason */}
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="reason" className="block text-sm font-semibold text-slate-700">
            Reason for Visit <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
              <FileText className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <textarea
              id="reason"
              name="reason"
              required
              value={formData.reason}
              onChange={handleChange}
              rows="3"
              className="input-modern w-full pl-12 pr-4 py-3.5 resize-none"
              placeholder="Describe the reason for your appointment..."
            />
          </div>
        </div>

        {/* Notes */}
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="notes" className="block text-sm font-semibold text-slate-700">
            Additional Notes
          </label>
          <div className="relative group">
            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
              <MessageSquare className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="input-modern w-full pl-12 pr-4 py-3.5 resize-none"
              placeholder="Any additional information..."
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-6">
        <button
          type="submit"
          disabled={loading || success}
          className="btn-primary flex-1 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="spinner w-5 h-5 border-2"></div>
              <span>{appointment ? 'Updating...' : 'Booking...'}</span>
            </div>
          ) : success ? (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 size={20} />
              <span>{appointment ? 'Updated!' : 'Booked!'}</span>
            </div>
          ) : (
            <span>{appointment ? 'Update Appointment' : 'Book Appointment'}</span>
          )}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="btn-secondary flex-1 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
