module.exports = mongoose => {
    var Software = mongoose.model(
      "software",
      mongoose.Schema(
        {
          id: String,
          firstname: String,
          lastname: String,
          present: Boolean,
        }
      )
    );
      return Software;
   };
   