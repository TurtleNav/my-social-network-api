const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// GET /api/users
//
// Returns all users present in the DB 
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(err) {
    res.status(500).json(err);
  }
}

// GET /api/users/:id
//
// Returns a specific user by their ID
async function getUser(req, res) {
  try {
    const user = await User.findOne({_id: req.params.userId});
    if (!user) {
      return res.status(404).json({message: 'There aren\'t any users with that id'});
    }
    res.status(200).json({user});
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
}

// POST /api/users
//
// Create a unique user and add them to the DB
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).json({user});
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
}

// DELETE /api/users/:userId
//
// Delete a user by their ID
async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndRemove({_id: req.params.userId});

    // send a 404 if the user tried to delete a non-existent user id
    if (!user) {
      res.status(404).json({message: "There isn\'t any user with that id"});
    }

    // Bonus - Delete thoughts associated with a user
    console.log('user -> ', user);

    /*
      TODO: implement some code below that duplicates the commented out behavior.
      Must deleted thoughts associated with a user instead

      const course = await Course.findOneAndUpdate(
        { students: req.params.studentId },
        { $pull: { students: req.params.studentId } },
        { new: true }
      );

      if (!course) {
        return res.status(404).json({
          message: 'Student deleted, but no courses found',
        });
      }

    */
    res.status(200).json({message: 'User was successfully deleted'});
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
}

// POST /api/users/:userId/friends/:friendId
//
// Add a friend to the user
async function addFriend(req, res) {
  try {
    const friend = await User.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({message: "No user with that friendId exists"});
    }
    const user = await User.findOneAndUpdate(
      {_id: req.params.userId},
      { $push: {friends: friend}},
      {runValidators: true, new: true}
    );

    if (!user) {
      return res.status(404).json({message: "No user with that userId exists"});
    }
    return res.status(200).json({message: "Added friend to user"});
  } catch(err) {
    return res.status(500).json(err);
  }
}
// DELETE /api/users/:userId/friends/:friendId
//
// Get a user by their userId then delete any friends that have an
// id matching friendId
async function deleteFriend(req, res) {
  try {

    const friend = await User.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({message: "No user with that friendId exists"});
    }

    const user = await User.findByIdAndUpdate(
      {_id: req.params.userId},
      {$pull: {friends: friend._id}}
    );

    if (!user) {
      return res.status(404).json({message: "No user with that userId exists"});
    }

    res.status(200).json({message: "Successfully deleted the specified friend from the user"});
  } catch(err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend
};
