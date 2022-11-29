module.exports = mongoose => {
    var Software = mongoose.model(
      "software",
      mongoose.Schema(
        {
          id: String,
          firstname: String,
          lastname: String,
          present: String
        }
      )
    );
      return Software;
   };
   