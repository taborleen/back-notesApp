const { Router } = require("express");
const { UserController } = require("../controllers/users.controller");

const router = Router();

router.post("/user/post", UserController.postUser)


module.exports = router;