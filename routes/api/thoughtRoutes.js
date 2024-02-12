const router = require('express').Router();


// get thought stuff
const {
  getThoughts,
  getThoughtById,
  postThought,
  updateThought,
  deleteThought,
  reactToThought,
  deleteReaction
} = require('../../controllers/thoughtController');

// route - /api/thoughts
// GET   - Get all thoughts in the DB
// POST  - Create a new thought
router.route('/').get(getThoughts).post(postThought);

// route  - /api/thoughts/:thoughtId
// GET    - Get a thought by its ID
// PUT    - Update a thought by its ID
// DELETE - Delete a thought by its ID
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// route  - /api/thoughts/:thoughtId/reactions
// POST   - React to the specified thought
router.route('/:thoughtId/reactions').post(reactToThought);

// route  - /api/thoughts/:thoughtId/:reactionId
// DELETE - Delete the particular thought
router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
