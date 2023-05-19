const createInstructor = require("../../controllers/instructorControllers/createInstructor");
const verifyUserExistence = require("../../helper/verifyUserExistence");
const bcryptjs = require("bcryptjs");

const instructorGetHandlers = (req, res) => {};
const instructorPostHandlers = async (req, res) => {
  const { name, lastname, email, password, studies, description } = req.body;
  try {
    await verifyUserExistence(email);

    const passwordHash = await bcryptjs.hash(password, 8);

    const response = await createInstructor(
      name,
      lastname,
      email,
      passwordHash,
      studies,
      description
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  instructorGetHandlers,
  instructorPostHandlers,
};
