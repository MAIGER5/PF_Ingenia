const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const createInstructor = async (
  name,
  lastname,
  email,
  password,
  studies,
  description,
  Is
) => {
  const assessment = 0;

  const newUser = await User.create({
    name,
    lastname,
    email,
    password,
    description,
    Is,
    assessment,
    studies,
    asset: true,
  });
  return { user: userDataForm(newUser) };
};
module.exports = createInstructor;
