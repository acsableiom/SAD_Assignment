var express = require('express');
var router = express.Router()
const {listStudent, deleteStudent, findStudent, updateStudent, addStudent} = require('../controllers/students.controller');
 
router.get('/', listStudent);

router.get('/:id', findStudent);

router.post('/update/:id', updateStudent);

router.delete('/:id', deleteStudent);

router.post('add', addStudent);
 
module.exports = router;
