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
async function getSingleUser(req, res) {
  try {
    const user = await User.findOne({_id: req.params.id});
      //.select('-__v')
      //.lean();
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

// DELETE /api/users/:id
//
// Delete a user by their ID
async function deleteUser(req, res) {
  try {
    const user = await User.findOneAndRemove({_id: req.params.userId});

    if (!user) {
      res.status(404).json({message: "There isn\'t any user with that id"});
    }

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

// GET /api/users/:id/thoughts
//
// Get a particular users' thoughts
async function getThoughts(req, res) {
  try {
    console.log("Getting some user thoughts");
    const user = await User.findOne(
      {_id: req.params.id},
    );
    if (!user) {
      res.status(404).json({message: "User with that id doesn't exist"});
    }
    res.status(200).json(user.thoughts);
  } catch(err) {
    res.status(500).json(err);
  }
};

// POST
async function addThought(req, res) {
  try {
    console.log('Adding a thought to the user');
    console.log(req.body);

    const thought = await Thought.create(req.body);

    const user = await User.findOneAndUpdate(
      {_id: req.params.id},
      { $addToSet: {thoughts: [thought]}},
      {runValidators: true, new: true}
    );

    if (!user) {
      return res.status(404).json({message: ''})
    }
    return res.status(200).json({message: "Added thought to user"});

  } catch(err) {
    return res.status(500).json(err);
  }
}

async function removeThought(req, res) {
  /*
  try {
    const student = await Student.findOneAndUpdate(
      { _id: req.params.studentId },
      { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
      { runValidators: true, new: true }
    );

    if (!student) {
      return res
        .status(404)
        .json({ message: 'No student found with that ID :(' });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
  */
}

async function getFriends(req, res) {
  try {
    const user = await User.findOne({_id: req.params.id});
    res.status(200).json(user.friends);
  } catch(err) {
    res.status(500).json(err);
  }
}

async function addFriend(req, res) {
  try {
    console.log('Adding a friend to the user');
    console.log(req.body);

    const friend = await User.findOne({username: req.body.username});
    if (!friend) {
      return res.status(404).json({message: "No user with that username exists"});
    }
    const user = await User.findOneAndUpdate(
      {_id: req.params.id},
      { $addToSet: {friends: friend}},
      {runValidators: true, new: true}
    );

    if (!user) {
      return res.status(404).json({message: ''})
    }
    return res.status(200).json({message: "Added friend to user"});

  } catch(err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
  getFriends,
  addFriend
};
