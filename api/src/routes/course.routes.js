const { Router } = require("express");
const {
  getCourseHandlers,
  getCourseByIDHandlers,
  createCourseHandlers,
} = require("../handlers/course/course.handlers");

const { cloudinary } = require("../utils/cloudinary");



const courseRouter = Router();

// Ruta para todos los cursos
courseRouter.get("/", getCourseHandlers);

courseRouter.get("/:id", getCourseByIDHandlers);

courseRouter.post("/", createCourseHandlers);

courseRouter.post("/upload", async(req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'ingenia',
        });
        console.log(uploadResponse)
        res.json({msg: "OK"})
  } catch (error) {
      console.log(error);
      res.status(500).json({err: error.message})
  }
});

module.exports = courseRouter;
