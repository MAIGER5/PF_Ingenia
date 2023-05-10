const { Router } = require("express");
const getUser = require("../controllers/getUser");

const userRouter = Router();

// Ruta para users
userRouter.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const user = getUser(id);
    res.status(200).send(user);
  } catch (error) {}
});

module.exports = userRouter;
