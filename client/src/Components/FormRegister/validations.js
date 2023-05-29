const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^(?=.*[A-Z]).{8,10}$/;

export function validationClient(inputs) {
  const errors = {}
  
  if (!inputs.name) errors.name = 'El nombre es obligatorio';
  if (inputs.name.length > 35) errors.name = 'Máximo de 35 caracteres';

  if (!inputs.lastname) errors.lastname = 'El Apellido es obligatorio';
  if (inputs.name.length > 35) errors.name = 'Máximo de 35 caracteres';

  if (!regexEmail.test(inputs.email)) errors.email = 'Ingresa un email válido';

  if (!regexPass.test(inputs.password)) errors.password = 'Debe tener al menos una letra Mayúscula';
  if (inputs.password.length < 8 || inputs.password.length > 10 ) errors.password = 'Debe tener entre 8 y 10 caracteres.';

  return errors;
}

export function validationVendor(inputs) {
  const errors = {}

  if (!inputs.name) errors.name = 'El nombre es obligatorio';
  if (inputs.name.length > 35) errors.name = 'Máximo de 35 caracteres';

  if (!inputs.lastname) errors.lastname = 'El Apellido es obligatorio';
  if (inputs.name.length > 35) errors.name = 'Máximo de 35 caracteres';

  if (!regexEmail.test(inputs.email)) errors.email = 'Ingresa un email válido';

  if (!regexPass.test(inputs.password)) errors.password = 'Debe tener al menos una letra Mayúscula';
  if (inputs.password.length < 6 || inputs.password.length > 10 ) errors.password = 'Debe tener entre 8 y 10 caracteres.';
  
  if (inputs.studies.length < 80 ) errors.studies = 'Ingresa mínimo 80 caracteres';

  if (inputs.studies.length > 250) errors.studies = 'Hay un máximo de 250 caracteres.';

  if (inputs.description.length < 100 ) errors.description = 'Ingresa mínimo 100 caracteres';

  if (inputs.description.length > 250) errors.description = 'Hay un máximo de 250 caracteres.';


  return errors;
}