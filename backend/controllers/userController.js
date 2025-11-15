import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private (Staff/Admin)
export const getUsers = async (req, res) => {
  try {
    let query = User.find();

    // Filter by role if provided
    if (req.query.role) {
      query = query.where('role').equals(req.query.role);
    }

    // Filter by active status if provided
    if (req.query.isActive) {
      query = query.where('isActive').equals(req.query.isActive);
    }

    const users = await query.sort('-createdAt');

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private (Staff/Admin)
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private (Admin)
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private (Admin)
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteOne();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user statistics (for admin dashboard)
// @route   GET /api/users/stats/dashboard
// @access  Private (Admin)
export const getUserStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $facet: {
          total: [{ $count: 'count' }],
          patients: [
            { $match: { role: 'patient' } },
            { $count: 'count' }
          ],
          staff: [
            { $match: { role: 'staff' } },
            { $count: 'count' }
          ],
          admins: [
            { $match: { role: 'admin' } },
            { $count: 'count' }
          ],
          active: [
            { $match: { isActive: true } },
            { $count: 'count' }
          ]
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total: stats[0].total[0]?.count || 0,
        patients: stats[0].patients[0]?.count || 0,
        staff: stats[0].staff[0]?.count || 0,
        admins: stats[0].admins[0]?.count || 0,
        active: stats[0].active[0]?.count || 0
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
