
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

  if (!inputs.description) errors.description = 'La descripción es obligatoria';
  if (inputs.description.length > 1000 ) errors.description = 'Máximo de 1000 caracteres';

  if (!inputs.content) errors.content = 'El contenido es obligatorio';
  if (inputs.content.length > 1000 ) errors.content = 'Máximo de 1000 caracteres';

  if (!inputs.duration) errors.duration = 'La duración es obligatoria';
  if (inputs.duration.length > 80) errors.duration = 'Máximo de 80 caracteres';

  if (!inputs.requirement) errors.requirement = 'Los requerimientos son obligatorios';
  if (inputs.requirement.length > 1000) errors.requirement= 'Máximo de 1000 caracteres';

  //learnTo

  if (!inputs.studyMethod) errors.studyMethod = 'El método de entrega es obiligatorio';
  if (inputs.studyMethod.length > 1000) errors.studyMethod= 'Máximo de 1000 caracteres';


  if (!inputs.lenguage) errors.lenguage = 'Campo obligatorio';
  if (!inputs.price) errors.price = 'Campo obligatorio';
  if (!inputs.dificulty) errors.dificulty = 'Campo obligatorio';
  if (!inputs.catego) errors.catego = 'Campo obligatorio';


  return errors;
}



