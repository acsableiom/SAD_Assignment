var express = require('express');
var router = express.Router()
const {listCourse, deleteCourse, findCourse, updateCourse, addCourse} = require('../controllers/courses.controller');
 
router.get('/', listCourse);

router.get('/:id', findCourse);

router.post('/update/:id', updateCourse);

router.delete('/:id', deleteCourse);

router.post('add', addCourse);
 
module.exports = router;
