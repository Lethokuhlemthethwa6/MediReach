import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Send appointment confirmation email
export const sendAppointmentConfirmation = async (appointment, patient) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: patient.email,
      subject: '✅ Appointment Confirmation - MediReach',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Appointment Confirmed</h2>
          <p>Dear ${patient.name},</p>
          <p>Your appointment has been successfully scheduled.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Appointment Details:</h3>
            <p><strong>Doctor:</strong> ${appointment.doctor}</p>
            <p><strong>Department:</strong> ${appointment.department}</p>
            <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <p><strong>Reason:</strong> ${appointment.reason}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            Please arrive 15 minutes before your scheduled appointment time.
          </p>
          
          <p>If you need to reschedule or cancel, please log in to your MediReach account.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #9ca3af; font-size: 12px;">
            This is an automated message from MediReach. Please do not reply to this email.
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    throw error;
  }
};

// Send appointment reminder email
export const sendAppointmentReminder = async (appointment, patient) => {
  try {
    const transporter = createTransporter();

    const appointmentDate = new Date(appointment.date);
    const daysUntil = Math.ceil((appointmentDate - new Date()) / (1000 * 60 * 60 * 24));

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: patient.email,
      subject: '⏰ Appointment Reminder - MediReach',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Upcoming Appointment Reminder</h2>
          <p>Dear ${patient.name},</p>
          <p>This is a friendly reminder about your upcoming appointment ${daysUntil === 0 ? 'today' : `in ${daysUntil} day(s)`}.</p>
          
          <div style="background-color: #fef2f2; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #991b1b;">Appointment Details:</h3>
            <p><strong>Doctor:</strong> ${appointment.doctor}</p>
            <p><strong>Department:</strong> ${appointment.department}</p>
            <p><strong>Date:</strong> ${appointmentDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
          </div>
          
          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #1e40af;">Important Reminders:</h4>
            <ul style="color: #1e3a8a;">
              <li>Please arrive 15 minutes early</li>
              <li>Bring your ID and insurance card</li>
              <li>Bring any relevant medical records</li>
              <li>Wear a mask if you have any symptoms</li>
            </ul>
          </div>
          
          <p>If you need to reschedule or cancel, please contact us as soon as possible.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #9ca3af; font-size: 12px;">
            This is an automated reminder from MediReach. Please do not reply to this email.
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Reminder email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending reminder email:', error);
    throw error;
  }
};

// Send appointment cancellation email
export const sendAppointmentCancellation = async (appointment, patient) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: patient.email,
      subject: '❌ Appointment Cancelled - MediReach',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Appointment Cancelled</h2>
          <p>Dear ${patient.name},</p>
          <p>Your appointment has been cancelled.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Cancelled Appointment:</h3>
            <p><strong>Doctor:</strong> ${appointment.doctor}</p>
            <p><strong>Department:</strong> ${appointment.department}</p>
            <p><strong>Date:</strong> ${new Date(appointment.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
          </div>
          
          <p>If you would like to reschedule, please log in to your MediReach account or contact us directly.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #9ca3af; font-size: 12px;">
            This is an automated message from MediReach. Please do not reply to this email.
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Cancellation email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending cancellation email:', error);
    throw error;
  }
};
