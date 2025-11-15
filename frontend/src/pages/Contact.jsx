import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-violet-500 to-violet-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
            <h1 className="text-5xl font-extrabold">Contact Us</h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              We're here to help. Get in touch with our team.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">support@medireach.com</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+254 700 123 456</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">Nairobi, Kenya</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-gray-800 mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">24/7 Support</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg text-center">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-violet-600 text-white font-bold py-3 rounded-lg hover:bg-violet-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">How do I book an appointment?</h3>
                <p className="text-gray-600 text-sm">Simply register, log in, and select your preferred date and time slot.</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Can I cancel my appointment?</h3>
                <p className="text-gray-600 text-sm">Yes, you can cancel or reschedule appointments from your dashboard.</p>
              </div>
              <div className="border-l-4 border-violet-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Is my data secure?</h3>
                <p className="text-gray-600 text-sm">Absolutely. We use enterprise-grade security to protect your information.</p>
              </div>
              <div className="border-l-4 border-rose-500 pl-4">
                <h3 className="font-bold text-gray-800 mb-2">What if I miss an appointment?</h3>
                <p className="text-gray-600 text-sm">You'll receive reminders, but you can always reschedule from your account.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="py-8 bg-red-50 border-y border-red-200">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-red-700 font-semibold">
              🚨 For medical emergencies, please call emergency services immediately at <strong>911</strong> or your local emergency number.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
