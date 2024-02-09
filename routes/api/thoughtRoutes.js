const router = require('express').Router();


// get thought stuff
const {
  getThoughts
} = require('../../controllers/thoughtController');

console.log('getallthought---> ', getThoughts);

// /api/thoughts
router.route('/').get(getThoughts);

// /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
