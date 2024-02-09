const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

/* This file handles ALL sub routes of /api/thoughts */

// GET /api/thoughts
//
// Get every thought from every user
async function getAllThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch(err) {
    res.status(500).json(err);
  }
}

// GET /api/thoughts/:thoughtId
//
// Get a single thought by its _id
async function getThoughtById(req, res) {
  try {
    const thoughts = await Thought.findById(req.params.thoughtId);
    if (!thoughts) {
      return res.status(404).json({message: "No thought with that id exists"});
    }
    res.status(200).json(thoughts);
  } catch(err) {
    res.status(500).json(err);
  }
}

// POST /api/thoughts
//
// Create a new thought and should be associated to a specific user
async function postThought(req, res) {
  try {
    const thought = await Thought.create(req.body);
    res.status(200).json(thought);
  } catch(err) {
    res.status(500).json(err);
  }  
}

// PUT /api/thoughts/:thoughtId
//
// Update the contents of a thought by specifying its
async function updateThought(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate(
      {_id: req.params.thoughtId},
      {}
    );
    res.status(200).json(thought);
  } catch(err) {
    res.status(500).json(err);
  }
}

// DELETE /api/thoughts/:thoughtId
//
// Delete a thought by specifying its id
async function deleteThought(req, res) {
  //
}

// GET /api/thoughts/:thoughtId/reaction
//
// Get reactions to a thought
async function getReactions(req, res) {
  //
}

// POST /api/thoughts/:thoughtId/reactions
//
// Create a reaction to someone's thought (specified by its id)
async function createReaction(req, res) {
  //
}

// DELETE /api/thoughts/:thoughtId/:reactionId
async function deleteReaction(req, res) {
  //
}