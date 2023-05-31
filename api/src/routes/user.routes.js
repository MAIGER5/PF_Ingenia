const { Router } = require("express");

const userPostHandler = require("../handlers/user/userPostHandler");
const userAuthenticated = require("../handlers/user/userAuthenticatedHandler");
const userPostGooHandler = require("../handlers/user/userPostGooHandler");
const userDeleteHandler = require("../handlers/user/userDeleteHandler");
const updateInfoHandler = require("../handlers/user/updateInfo/updateInfoHandler");
const user = require("../controllers/userControllers/userPrueba");
const {
  myCoursesHandlers,
  myBillsHandlers,
} = require("../handlers/user/myCoursesHandlers");
const userGetHandler = require("../handlers/user/userGetHandler");
const {favoritePostHandlers,favoriteGetHandlers,favoriteDeleteHandlers} = require('../handlers/user/favoritePostHandlers')

const checkAuth = require("../middleware/authUser");
const checkRoleAuth = require("../middleware/roleAuth");

const { validateCreate } = require("../utils/validators/userCreate");
const { validateLogin } = require("../utils/validators/userLogin");

const userRouter = Router();

// Ruta para users
// userRouter.get("/", checkAuth, checkRoleAuth(["STUDENT"]), user);
userRouter.get("/:idUser", userGetHandler);

userRouter.post("/created", validateCreate, userPostHandler);

// Perfil del user
userRouter.get("/myCourses/:id", myCoursesHandlers);

userRouter.get("/myBills/:id", myBillsHandlers);

userRouter.post("/login", validateLogin, userAuthenticated);

userRouter.post("/login/google", userPostGooHandler);

userRouter.put("/delete", userDeleteHandler);

userRouter.put("/updatedInfo", updateInfoHandler);

userRouter.post("/favorite",favoritePostHandlers)

userRouter.delete("/favorite",favoriteDeleteHandlers)

userRouter.get("/favorite/:id",favoriteGetHandlers)

module.exports = userRouter;
