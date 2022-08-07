const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  name: String,
  title: String,
  time: String,
  color: String,
  important: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;