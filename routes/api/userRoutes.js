const router = require('express').Router();

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
  getFriends,
  addFriend
} = require('../../controllers/userController');

// Get all users api/users
router.route('/').get(getUsers);

// Get user by specific object ID - GET at /api/users/:id
router.route('/:id').get(getUser);

// create user - POST at /api/users
router.route('/').post(createUser);

// Delete a user - DELETE at /api/users/:id
router.route('/:id').delete(deleteUser);

// Get a users' thoughts
//router.route('/:id/thoughts').get(getThoughts);
//router.route('/:studentId/assignments').post(addAssignment);

// Post a thought
router.route("/:id/thoughts").post(addThought);

// get friends
router.route('/:id/friends').get(getFriends);

// Add a friend
router.route('/:id/friends').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
