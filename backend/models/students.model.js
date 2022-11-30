module.exports = mongoose => {
    var Students = mongoose.model(
      "students",
      mongoose.Schema(
        {
          id: Number,
          firstname: String,
          lastname: String,
          present: Boolean,
        }
      )
    );
      return Students;
   };
