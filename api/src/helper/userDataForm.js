const userDataForm = ({
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
}) => {
  const user = {
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
  };
  return user;
};

module.exports = userDataForm;
