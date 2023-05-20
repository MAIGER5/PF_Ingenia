const userDataForm = ({
  idUser,
  name,
  lastname,
  email,
  imgProfile,
  Is,
  assessment,
  studies,
  asset,
  CourseIdCourse,
  createdAt,
  updatedAt,
}) => {
  const userStuden = {
    idUser,
    name,
    lastname,
    email,
    imgProfile,
    Is,
    asset,
    CourseIdCourse,
    createdAt,
    updatedAt,
    loginVerification: true,
  };

  const userInstructor = {
    idUser,
    name,
    lastname,
    email,
    imgProfile,
    Is,
    assessment,
    studies,
    asset,
    CourseIdCourse,
    createdAt,
    updatedAt,
  };

  if (Is === "STUDENT") {
    return userStuden;
  } else if (Is === "INSTRUCTOR") {
    return userInstructor;
  } else {
    return "Is admin";
  }
};

module.exports = userDataForm;
