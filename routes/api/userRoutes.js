const router = require('express').Router();

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// Get all users api/users
router.route('/').get(getUsers);

// Get user by specific object ID - GET at /api/users/:userId
router.route('/:userId').get(getUser);

// create user - POST at /api/users
router.route('/').post(createUser);

// Delete a user - DELETE at /api/users/:userId
router.route('/:userId').delete(deleteUser);

// route  - /api/user/:userId/friends/:friendId
// POST   - Add a friend to the user
// DELETE - delete a friend from the user
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
