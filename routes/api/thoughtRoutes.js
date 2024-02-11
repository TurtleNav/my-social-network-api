const router = require('express').Router();


// get thought stuff
const {
  getThoughts,
  getThoughtById,
  postThought
} = require('../../controllers/thoughtController');

// route - /api/thoughts
// GET   - Get all thoughts in the DB
// POST  - Create a new thought
router.route('/').get(getThoughts).post(postThought);

// route - /api/thoughts/:thoughtId
// GET   - Get a thought by its ID
// PUT   - Update a thought by its ID
router.route('/:thoughtId').get(getThoughtById);

// route  - /api/thoughts/:thoughtId/reactions
// GET    - Get reactions of a particular thought
// POST   - React to the specified thought
// DELETE - Delete the particular thought
router.route('/:thoughtId/reactions').post(ge)

module.exports = router;
