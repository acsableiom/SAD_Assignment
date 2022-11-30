module.exports = mongoose => {
    var Courses = mongoose.model(
      "courses",
      mongoose.Schema(
        {
          id: String,
          coursename: String,
          coursecapacity: Number,
          courseattendance: Number,
        }
      )
    );
      return Courses;
   };