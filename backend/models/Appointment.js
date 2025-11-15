import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    doctor: {
      type: String,
      required: [true, 'Please add a doctor name']
    },
    department: {
      type: String,
      required: [true, 'Please add a department'],
      enum: [
        'General Practice',
        'Pediatrics',
        'Cardiology',
        'Dermatology',
        'Orthopedics',
        'Neurology',
        'Psychiatry',
        'Ophthalmology',
        'ENT',
        'Other'
      ]
    },
    date: {
      type: Date,
      required: [true, 'Please add an appointment date']
    },
    time: {
      type: String,
      required: [true, 'Please add an appointment time']
    },
    reason: {
      type: String,
      required: [true, 'Please add a reason for visit'],
      trim: true
    },
    status: {
      type: String,
      enum: ['scheduled', 'confirmed', 'cancelled', 'completed', 'no-show'],
      default: 'scheduled'
    },
    notes: {
      type: String,
      trim: true
    },
    reminderSent: {
      type: Boolean,
      default: false
    },
    reminderSentAt: {
      type: Date
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

// Index for faster queries
appointmentSchema.index({ patient: 1, date: 1 });
appointmentSchema.index({ status: 1, date: 1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
