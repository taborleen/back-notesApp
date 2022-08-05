const Notes = require("../models/notes.model")

module.exports.notesController = {
    postNotes: async(req, res) => {
        try {
            const { name, title, time, color, important } = req.body;
      
            const notic = await Notes.create({
              name,
              title,
              time,
              color,
              important
            });
      
            return res.json(notic);
          } catch (error) {
            return res.status(400).json({
              error: "Ошибка при добавлении услуги: " + error.toString(),
            });
          }
        },
      }