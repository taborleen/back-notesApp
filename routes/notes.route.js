const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post("/note/post", notesController.postNotes)


module.exports = router;