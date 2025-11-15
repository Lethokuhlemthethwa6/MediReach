import cron from 'node-cron';
import Appointment from '../models/Appointment.js';
import User from '../models/User.js';
import { sendAppointmentReminder } from '../utils/emailService.js';

// Function to send reminders for upcoming appointments
const sendUpcomingReminders = async () => {
  try {
    console.log('🔄 Running appointment reminder job...');

    // Get tomorrow's date range
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const endOfTomorrow = new Date(tomorrow);
    endOfTomorrow.setHours(23, 59, 59, 999);

    // Find appointments for tomorrow that haven't received reminders
    const appointments = await Appointment.find({
      date: { $gte: tomorrow, $lte: endOfTomorrow },
      status: { $in: ['scheduled', 'confirmed'] },
      reminderSent: false
    }).populate('patient', 'name email');

    console.log(`📧 Found ${appointments.length} appointments to remind`);

    // Send reminders
    for (const appointment of appointments) {
      try {
        await sendAppointmentReminder(appointment, appointment.patient);
        
        // Update appointment to mark reminder as sent
        appointment.reminderSent = true;
        appointment.reminderSentAt = new Date();
        await appointment.save();

        console.log(`✅ Reminder sent for appointment ${appointment._id}`);
      } catch (error) {
        console.error(`❌ Failed to send reminder for appointment ${appointment._id}:`, error.message);
      }
    }

    console.log('✅ Reminder job completed successfully');
  } catch (error) {
    console.error('❌ Error in reminder job:', error);
  }
};

// Initialize cron job
export const initReminderCron = () => {
  // Default schedule: Every day at 9 AM
  const schedule = process.env.REMINDER_CRON_SCHEDULE || '0 9 * * *';

  console.log(`⏰ Initializing reminder cron job with schedule: ${schedule}`);

  // Schedule the job
  cron.schedule(schedule, sendUpcomingReminders, {
    scheduled: true,
    timezone: 'Africa/Nairobi' // Adjust timezone as needed
  });

  console.log('✅ Reminder cron job initialized');

  // Optional: Run immediately on startup for testing (comment out in production)
  // sendUpcomingReminders();
};

// Manual trigger function (for testing)
export const triggerReminders = async () => {
  await sendUpcomingReminders();
};
