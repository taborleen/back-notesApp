const Todo = require("../models/todos.model");

module.exports.todosController = {
  postTodo: async (req, res) => {
    try {
      const { name, title, time, color, important, completed } = req.body;

      const todic = await Todo.create({
        name,
        title,
        time,
        color,
        important,
        completed
      });

      return res.json(todic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при создании тудушки: " + error.toString(),
      });
    }
  },
  getTodoById: async (req, res) => {
    try {
      const todic = await Todo.findById(req.params.id);
      return res.json(todic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе тудушки по ID: " + error.message,
      });
    }
  },
  getAllTodo: async (req, res) => {
    try {
      const todic = await Todo.find();
      return res.json(todic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех тудушек: " + error.message,
      });
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todic = await Todo.findByIdAndDelete(req.params.id);
      return res.json(todic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.message,
      });
    }
  },
  pathTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        title: req.body.title,
        time: req.body.time,
        color: req.body.color,
        important: req.body.important,
        completed: req.body.completed
      });
      const todic = await Todo.findById(req.params.id);
      return res.json(todic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при изменении: " + error.message,
      });
    }
  },
};
