const validateUpdate = (password) => {
  if (password.length < 8 || password.length > 10) {
    throw new Error("La contraseña debe tener entre 8 y 10 caracteres");
  } else if (!/[A-Z]/.test(password)) {
    throw new Error("La contraseña debe contener al menos una letra mayúscula");
  } else if (!/[0-9]/.test(password)) {
    throw new Error("La contraseña debe contener al menos un número");
  }
};

module.exports = { validateUpdate };
