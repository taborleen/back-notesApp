const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
  color: String,
  important: {
    type: Boolean,
    default: false,
  },
}); //s

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;


/*
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
*/