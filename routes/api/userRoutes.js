const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought
} = require('../../controllers/userController');

// Get all users api/users
router.route('/').get(getUsers);

// Get user by specific object ID - GET at /api/users/:id
router.route('/:id').get(getSingleUser);

// create user - POST at /api/users
router.route('/').post(createUser);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;