const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = new RegExp("[0-9]");

export function validationSign(inputs) {
  const errors = {}

  if (!regexEmail.test(inputs.email)) errors.email = 'Ingresa un email válido';

  if (!regexPass.test(inputs.password)) errors.password = 'Debe tener al menos un número';
  if (inputs.password.length < 6 || inputs.password.length > 10 ) errors.password = 'Debe tener entre 6 y 10 caracteres.';

  return errors;
}