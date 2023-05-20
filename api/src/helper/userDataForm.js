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
  tokenSession,
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
    tokenSession,
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
    description,
    studies,
    asset,
    CourseIdCourse,
    createdAt,
    updatedAt,
    tokenSession,
    loginVerification: true,
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
