const { Router } = require("express");

const router = Router();

router.use(require("./notes.route"));
router.use(require('./authRouter'))

module.exports = router;