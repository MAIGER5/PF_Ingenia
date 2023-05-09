const { Router } = require('express');

const courseRouter = require('./course.routes');

const router = Router();

router.use('/courses', courseRouter)

module.exports = router