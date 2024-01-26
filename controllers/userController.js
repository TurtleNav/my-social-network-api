const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(err) {
    res.status(500).json(err);
  }
}

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

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).json({user});
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
}

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

// can get thoughts by user.thoughts OR thoughts.find({username: X})
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

async function addThought(req, res) {
  try {
    console.log('Adding a thought to the user');
    const user = await User.findOneAndUpdate(
      {_id: req.params.id},
      { $addToSet: {thoughts: req.body}},
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

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  getThoughts,
  addThought,
  removeThought
};
