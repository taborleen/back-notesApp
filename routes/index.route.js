const { Router } = require("express");

const router = Router();

router.use(require("./user.route"));
router.use(require("./notes.route"));

module.exports = router;