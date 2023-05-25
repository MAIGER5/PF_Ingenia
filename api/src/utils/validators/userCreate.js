const { check } = require("express-validator");
const validationResult = require("../../middleware/validate");

const validateCreate = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("El campo 'name' es requerido")
    .not()
    .isEmpty()
    .withMessage("El campo 'name' no puede estar vacío"),
  check("lastname")
    .exists({ checkFalsy: true })
    .withMessage("El campo 'last name' es requerido")
    .not()
    .isEmpty()
    .withMessage("El campo 'last name' no puede estar vacío"),
  check("password")
    .isLength({ min: 8, max: 10 })
    .withMessage("La contraseña debe tener entre 8 y 10 caracteres")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .matches(/[0-9]/)
    .withMessage("La contraseña debe contener al menos un número"),
  check("email")
    .exists()
    .withMessage("El campo 'email' es obligatorio")
    .isEmail()
    .withMessage(
      "Ingrese un formato de correo electrónico válido para el campo 'email'"
    ),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];

module.exports = { validateCreate };
