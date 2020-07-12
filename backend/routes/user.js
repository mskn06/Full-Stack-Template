const { Router } = require("express");
const UserController = require("../controller/user");
const router = Router();

// signup
router.post("/signup", UserController.insert);

// login
router.post("/login", UserController.login);

// update
router.post("/user/:id", UserController.update);

module.exports = (app) => {
  app.use(`/`, router);
};
