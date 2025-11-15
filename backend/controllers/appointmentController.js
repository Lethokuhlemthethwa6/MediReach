import Appointment from '../models/Appointment.js';
import User from '../models/User.js';

// @desc    Get all appointments (filtered by role)
// @route   GET /api/appointments
// @access  Private
export const getAppointments = async (req, res) => {
  try {
    let query;

    // Patients can only see their own appointments
    if (req.user.role === 'patient') {
      query = Appointment.find({ patient: req.user.id });
    } else {
      // Staff and admin can see all appointments
      query = Appointment.find();
    }

    // Apply filters if provided
    if (req.query.status) {
      query = query.where('status').equals(req.query.status);
    }

    if (req.query.date) {
      const startOfDay = new Date(req.query.date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(req.query.date);
      endOfDay.setHours(23, 59, 59, 999);
      query = query.where('date').gte(startOfDay).lte(endOfDay);
    }

    // Populate patient information
    query = query.populate('patient', 'name email phone');

    // Sort by date
    query = query.sort({ date: 1, time: 1 });

    const appointments = await query;

    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single appointment
// @route   GET /api/appointments/:id
// @access  Private
export const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('patient', 'name email phone dateOfBirth address')
      .populate('createdBy', 'name email')
      .populate('updatedBy', 'name email');

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Make sure user is authorized to view this appointment
    if (
      req.user.role === 'patient' &&
      appointment.patient._id.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: 'Not authorized to view this appointment' });
    }

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private
export const createAppointment = async (req, res) => {
  try {
    const { doctor, department, date, time, reason, notes, patient } = req.body;

    // Determine patient ID
    let patientId;
    if (req.user.role === 'patient') {
      patientId = req.user.id;
    } else if (req.user.role === 'staff' || req.user.role === 'admin') {
      if (!patient) {
        return res.status(400).json({ message: 'Please provide patient ID' });
      }
      patientId = patient;
    }

    // Verify patient exists
    const patientExists = await User.findById(patientId);
    if (!patientExists) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Create appointment
    const appointment = await Appointment.create({
      patient: patientId,
      doctor,
      department,
      date,
      time,
      reason,
      notes,
      createdBy: req.user.id
    });

    const populatedAppointment = await Appointment.findById(appointment._id)
      .populate('patient', 'name email phone')
      .populate('createdBy', 'name email');

    res.status(201).json({ success: true, data: populatedAppointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update appointment
// @route   PUT /api/appointments/:id
// @access  Private
export const updateAppointment = async (req, res) => {
  try {
    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Make sure user is authorized to update this appointment
    if (
      req.user.role === 'patient' &&
      appointment.patient.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: 'Not authorized to update this appointment' });
    }

    // Patients can only update certain fields
    if (req.user.role === 'patient') {
      const { date, time, reason, notes } = req.body;
      appointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        { date, time, reason, notes, updatedBy: req.user.id },
        { new: true, runValidators: true }
      );
    } else {
      // Staff and admin can update all fields
      appointment = await Appointment.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedBy: req.user.id },
        { new: true, runValidators: true }
      );
    }

    const populatedAppointment = await Appointment.findById(appointment._id)
      .populate('patient', 'name email phone')
      .populate('updatedBy', 'name email');

    res.status(200).json({ success: true, data: populatedAppointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private
export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Make sure user is authorized to delete this appointment
    if (
      req.user.role === 'patient' &&
      appointment.patient.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: 'Not authorized to delete this appointment' });
    }

    await appointment.deleteOne();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get appointment statistics (for dashboard)
// @route   GET /api/appointments/stats/dashboard
// @access  Private (Staff/Admin)
export const getAppointmentStats = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const stats = await Appointment.aggregate([
      {
        $facet: {
          total: [{ $count: 'count' }],
          scheduled: [
            { $match: { status: 'scheduled' } },
            { $count: 'count' }
          ],
          confirmed: [
            { $match: { status: 'confirmed' } },
            { $count: 'count' }
          ],
          today: [
            { $match: { date: { $gte: today } } },
            { $count: 'count' }
          ],
          upcoming: [
            { $match: { date: { $gt: today }, status: { $in: ['scheduled', 'confirmed'] } } },
            { $count: 'count' }
          ]
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: stats[0].total[0]?.count || 0,
        scheduled: stats[0].scheduled[0]?.count || 0,
        confirmed: stats[0].confirmed[0]?.count || 0,
        today: stats[0].today[0]?.count || 0,
        upcoming: stats[0].upcoming[0]?.count || 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
