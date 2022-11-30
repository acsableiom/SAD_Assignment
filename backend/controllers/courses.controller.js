const db = require("../models");
const coursesModel = require("../models/courses.model.js");
const courses = db.courses;

//List all courses in database
const listCourse = (req, res)=>
{
    coursesModel.Find().then(courses => res.json(courses)).catch(err => res.status(400).json('error ' + err));
}

//Find courses by ID
const findCourse = (req, res)=>
{
    coursesModel.FindById(req.params.id).then(courses => res.json(courses)).catch(err => res.status(400).json('error ' + err));
}

const addCourse = (req, res)=>
{

}

const updateCourse = (req, res)=>
{

}

const deleteCourse = (req, res)=>
{
    coursesModel.findByIdAndDelete(req.params.id)
    .then(() => res.json("course " + req.params.id + " deleted from database."))
    .catch(err => res.status(400).json('error ' + err));
}

module.exports = {listCourse, findCourse, addCourse, updateCourse, deleteCourse}