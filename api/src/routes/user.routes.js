const { Router } = require("express");

const userPostHandler = require("../handlers/user/userPostHandler");
const userAuthenticated = require("../handlers/user/userAuthenticatedHandler");
const user = require("../controllers/userControllers/userPrueba");

const checkAuth = require("../middleware/authUser");
const checkRoleAuth = require("../middleware/roleAuth");

const userRouter = Router();

// Ruta para users
userRouter.get("/", checkAuth, checkRoleAuth(["STUDEN", "INSTRUCTOR"]), user);

userRouter.post("/created", userPostHandler);

userRouter.post("/login", userAuthenticated);

module.exports = userRouter;
