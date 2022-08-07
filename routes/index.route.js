const { Router } = require("express");

const router = Router();

router.use(require("./notes.route"));
router.use(require('./authRouter'))
router.use(require("./user.route"));
router.use(require("./note.route"));
router.use(require("./todo.route"))

module.exports = router;