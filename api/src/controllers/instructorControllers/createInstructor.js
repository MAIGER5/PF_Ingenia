const { User, Course } = require("../../database");
const userDataForm = require("../../helper/userDataForm");

const createInstructor = async (name, lastname, email, password, studies) => {
  console.log(name);
  const Is = "INSTRUCTOR";
  const newUser = await User.create({
    name,
    lastname,
    email,
    password,
    studies,
    Is,
    asset: true,
  });
  return { user: userDataForm(newUser) };
};
module.exports = createInstructor;
