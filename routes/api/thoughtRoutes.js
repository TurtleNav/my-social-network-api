const router = require('express').Router();


// get thought stuff
const {
  getAllThoughts
} = require('../../controllers/thoughtController');


// /api/users
router.route('/').get(getAllThoughts);

// /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
