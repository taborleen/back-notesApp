const Notes = require("../models/notes.model");

module.exports.notesController = {
  postNotes: async (req, res) => {
    try {
      const { name, title, time, color, important } = req.body;

      const notic = await Notes.create({
        name,
        title,
        time,
        color,
        important,
      });

      return res.json(notic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при создании заметки: " + error.toString(),
      });
    }
  },
  getnotesById: async (req, res) => {
    try {
      const notic = await Notes.findById(req.params.id);
      return res.json(notic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе заметки по ID: " + error.message,
      });
    }
  },
  getAllNotes: async (req, res) => {
    try {
      const notic = await Notes.find();
      return res.json(notic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех заметок: " + error.message,
      });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const notic = await Notes.findByIdAndDelete(req.params.id);
      return res.json(notic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.message,
      });
    }
  },
  pathNote: async (req, res) => {
    try {
      await Notes.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        title: req.body.title,
        time: req.body.time,
        color: req.body.color,
        important: req.body.important,
      });
      const notic = await Notes.findById(req.params.id);
      return res.json(notic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.message,
      });
    }
  },
};
