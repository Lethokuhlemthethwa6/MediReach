import express from 'express';
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserStats
} from '../controllers/userController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All routes are protected and require staff or admin role
router.use(protect);
router.use(authorize('staff', 'admin'));

// Stats route (admin only)
router.get('/stats/dashboard', authorize('admin'), getUserStats);

// Main CRUD routes
router.route('/')
  .get(getUsers);

router.route('/:id')
  .get(getUser)
  .put(authorize('admin'), updateUser)
  .delete(authorize('admin'), deleteUser);

export default router;
