const { check } = require("express-validator");
const validationResult = require("../../middleware/validate");

const validateLogin = [
  check("email")
    .exists()
    .withMessage("El campo 'email' es obligatorio")
    .isEmail()
    .withMessage(
      "Ingrese un formato de correo electrónico válido para el campo 'email'"
    ),
  check("password")
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 y 10 caracteres")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .matches(/[0-9]/)
    .withMessage("La contraseña debe contener al menos un número"),
  check("userType")
    .isIn(["STUDENT", "INSTRUCTOR", "ADMIN"])
    .withMessage("El campo 'userType' debe ser un role valido"),

  (req, res, next) => {
    validationResult(req, res, next);
  },
];

module.exports = { validateLogin };
