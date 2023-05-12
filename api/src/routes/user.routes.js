const { Router } = require("express");

const getAuthenticatedUser = require("../controllers/userControllers/userAuthenticatedController");
const userPostHandler = require("../handlers/user/userPostHandler");

const userRouter = Router();

// Ruta para users
userRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = getUser(id);
    res.status(200).send(user);
  } catch (error) {}
});

userRouter.post("/created", userPostHandler);

userRouter.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getAuthenticatedUser(email, password);
    res.status(200).send(user);
  } catch (error) {}
});

module.exports = userRouter;
