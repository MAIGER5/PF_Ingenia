
export const categoryOptions = [
    {name:'Informática', idCategory: 1},
    {name:'Ofimática', idCategory: 2},
    {name:'Telecomunicaciones', idCategory: 3 },
    {name:'Python', idCategory: 4 },
    {name:'Java', idCategory: 5 },
    {name:'React', idCategory: 6 },
    {name:'Redes', idCategory: 7 },
    {name:'Cisco', idCategory: 8 },
    {name:'Internet', idCategory: 9 },
    {name:'Frameworks', idCategory: 10},
]

export function validationCourse(inputs) {
  const errors = {}

  if (!inputs.title) errors.title = 'El nombre es obligatorio';
  if (inputs.title.length > 80) errors.title = 'Máximo de 80 caracteres';

  if (!inputs.description) errors.description = 'El nombre es obligatorio';
  if (inputs.title.length > 80) errors.title = 'Máximo de 80 caracteres';

  return errors;
}



