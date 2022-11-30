const db = require("../models");
const studentsModel = require("../models/students.model");
const students = db.students;

//List all students in database
const listStudent = (req, res)=>
{
    studentsModel.find().then(students => res.json(students)).catch(err => res.status(400).json('error ' + err));
    console.log(students);
}

//Find student by ID
const findStudent = (req, res)=>
{
    studentsModel.findById(req.params.id).then(students => res.json(students)).catch(err => res.status(400).json('error ' + err));
}

const deleteStudent = (req, res)=>
{
    studentsModel.findByIdAndDelete(req.params.id)
    .then(() => res.json("student " + req.params.id + " deleted from database."))
    .catch(err => res.status(400).json('error ' + err));
}

const addStudent = (req, res)=>
{

}

const updateStudent = (req, res)=>
{

}

module.exports = {listStudent, deleteStudent, findStudent, addStudent, updateStudent}



