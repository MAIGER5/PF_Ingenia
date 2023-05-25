const { Router } = require("express");

const userPostHandler = require("../handlers/user/userPostHandler");
const userAuthenticated = require("../handlers/user/userAuthenticatedHandler");
const userPostGooHandler = require("../handlers/user/userPostGooHandler");
const userDeleteHandler = require("../handlers/user/userDeleteHandler");
const user = require("../controllers/userControllers/userPrueba");

const checkAuth = require("../middleware/authUser");
const checkRoleAuth = require("../middleware/roleAuth");

const { validateCreate } = require("../utils/validators/userCreate");
const { validateLogin } = require("../utils/validators/userLogin");

const userRouter = Router();

// Ruta para users
userRouter.get("/", checkAuth, checkRoleAuth(["STUDENT"]), user);

userRouter.post("/created", validateCreate, userPostHandler);

userRouter.post("/login", validateLogin, userAuthenticated);

userRouter.post("/login/google", userPostGooHandler);

userRouter.post("/delete", userDeleteHandler);

module.exports = userRouter;
