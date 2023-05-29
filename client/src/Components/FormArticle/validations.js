export function validationArticle(inputs) {
  const errors = {}

  if (!inputs.title) errors.title = 'El título es obligatorio';
  if (inputs.title.length > 80) errors.title = 'Máximo de 80 caracteres';

  if (!inputs.subtitle) errors.subtitle = 'El subtítulo es obligatorio';
  if (inputs.subtitle.length > 80) errors.subtitle = 'Máximo de 80 caracteres';

  if (!inputs.text) errors.text = 'El primer párrafo es obligatorio';
  if (inputs.text.length < 250) errors.text = 'Mínimo de 250 caracteres';
  if (inputs.text.length > 1000) errors.text = 'Máximo de 1000 caracteres';

  if (inputs.subtitleTwo.length > 80) errors.subtitleTwo = 'Máximo de 80 caracteres';
  if(inputs.subtitleTwo && !inputs.textTwo) errors.textTwo = "Es requerido ingreses el texto del segundo párrafo"

  if (inputs.textTwo.length < 250 && inputs.subtitleTwo) errors.textTwo = 'Mínimo de 250 caracteres';
  if (inputs.textTwo.length > 1000) errors.textTwo = 'Máximo de 1000 caracteres';

  if (inputs.subtitleThree.length > 80) errors.subtitleThree = 'Máximo de 80 caracteres';
  if(inputs.subtitleThree && !inputs.textThree) errors.textThree = "Es requerido ingreses el texto del tercer párrafo"

  if (inputs.textThree.length < 250 && inputs.subtitleThre) errors.textThree = 'Mínimo de 250 caracteres';
  if (inputs.textThree.length > 1000) errors.textThree = 'Máximo de 1000 caracteres';



  return errors;
}