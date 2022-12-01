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

//deletes a student and all their information from the database
const deleteStudent = (req, res)=>
{
    studentsModel.findByIdAndDelete(req.params.id)
    .then(() => res.json("student " + req.params.id + " deleted from database."))
    .catch(err => res.status(400).json('error ' + err));
}

//adds a student to the database
const addStudent = (req, res)=>
{
    const studentname = req.body.studentname;

    const addNewStudent = new studentsModel({});

    addNewStudent.save();
}

//updates a students information after finding in the database
const updateStudent = (req, res)=>
{
    studentsModel.FindById(req,params,id).then(students => 
        {
            students.name = req.body.name;
            students.save().then(() => res.json('course details updated successfuly'))
            .catch(err => res.status(400).json('error code ') + err);
        })

        
}

module.exports = {listStudent, deleteStudent, findStudent, addStudent, updateStudent}



