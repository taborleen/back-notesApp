const Notes = require("../models/notes.model")

module.exports.notesController = {
    postNotes: async(req, res) => {
        try {
            const postNote = await Notes.create({
                name: req.body.name,
                title: req.body.title,
                time: req.body.time,
                color: req.body.color,
                avatar: req.body.avatar,
                important: req.body.important,
            });
        }catch (error) {
            return res.status(400).json({
                error: "Ошибка при добавлении комментария: " + error.toString(),
              });
            }
          },
    }