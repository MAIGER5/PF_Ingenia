const { Router } = require("express");

const userPostHandler = require("../handlers/user/userPostHandler");
const userAuthenticated = require("../handlers/user/userAuthenticatedHandler");
const userPostGooHandler = require("../handlers/user/userPostGooHandler");
const user = require("../controllers/userControllers/userPrueba");
const {myCoursesHandlers,myBillsHandlers} = require('../handlers/user/myCoursesHandlers')

const checkAuth = require("../middleware/authUser");
const checkRoleAuth = require("../middleware/roleAuth");

const userRouter = Router();

// Ruta para users
userRouter.get("/", checkAuth, checkRoleAuth(["STUDENT"]), user);

// Perfil del user
userRouter.get('/myCourses/:id',myCoursesHandlers)
userRouter.get('/myBills/:id', myBillsHandlers)

userRouter.post("/created", userPostHandler);

userRouter.post("/login", userAuthenticated);

userRouter.post("/login/google", userPostGooHandler);

module.exports = userRouter;
