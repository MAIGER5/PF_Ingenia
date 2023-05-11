const cursos = [
    {
      IdCuros: 1,
      title: "Java orientado a objetos",
      descriction: "Texto descriptivo",
      imgCurso:
        "https://formaciononline.eu/wp-content/uploads/2013/05/curso-java.jpg",
      idiom: "Español",
      price: 29.99,
      duration: "3 meses",
      skills: ["java", "java orientado a objetos", "visual"],
      difficulty: "Basico", //Recordando que cuando se este del lado del registro de curso, este OLE: Basico,Intermedio,Avanzado
      instructor: "Yeison Gonzalez", // aca para el back llega distinto
      category: ["programacion", "mundo TI", "Tecnoliga"],
      ratings: 4.6,
      asset: true,
    },
    {
      IdCuros: 2,
      title: "Photoshop",
      descriction: "Texto descriptivo",
      imgCurso:
        "https://imactions.agency/wp-content/uploads/2022/12/que-es-photoshop.jpg",
      idiom: "Español",
      price: 25,
      duration: "una semana",
      skills: ["photoshop", "diseño grafico", "paleta de colores"],
      difficulty: "Medio",
      instructor: "Felipe Garcia",
      category: ["Diseño grafico", "Marketing"],
      ratings: 3.3,
      asset: true,
    },
    {
      IdCurso: 3,
      title: "Introducción a Python",
      description: "Curso introductorio a Python para programadores novatos",
      imgCurso:
        "https://www.dongee.com/tutoriales/content/images/2023/01/image-47.png",
      idiom: "Español",
      price: 19.99,
      duration: "2 meses",
      skills: ["python", "programación", "novatos"],
      difficulty: "Basico",
      instructor: "Maria Garcia",
      category: ["programación", "mundo TI", "Tecnología"],
      ratings: 4.8,
      asset: true,
    },
    {
      IdCurso: 4,
      title: "Machine Learning con TensorFlow",
      description: "Curso de Machine Learning para expertos en TensorFlow",
      imgCurso:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/12/139161-que-es-inteligencia-artificial.jpg?tf=3840x",
      idiom: "Inglés",
      price: 99.99,
      duration: "6 meses",
      skills: ["machine learning", "TensorFlow", "programación"],
      difficulty: "Avanzado",
      instructor: "John Smith",
      category: ["inteligencia artificial", "ciencia de datos", "Tecnología"],
      ratings: 4.9,
      asset: true,
    },
    {
      IdCurso: 5,
      title: "Desarrollo web con React",
      description: "Curso de desarrollo web utilizando la librería React",
      imgCurso:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHt_SjisE0B--OHBCw5TOTIFPgOEtXhmcEmq39tH7_cYUqZe0JzwbadwcGkG4kjZFdD8&usqp=CAU",
      idiom: "Español",
      price: 49.99,
      duration: "4 meses",
      skills: ["React", "desarrollo web", "programación"],
      difficulty: "Intermedio",
      instructor: "Carlos Rodriguez",
      category: ["desarrollo web", "mundo TI", "Tecnología"],
      ratings: 4.7,
      asset: true,
    },
    {
      IdCurso: 6,
      title: "Introducción a la inteligencia artificial",
      description:
        "Curso introductorio para aprender los fundamentos de la inteligencia artificial",
      imgCurso:
        "https://elordenmundial.com/wp-content/uploads/2023/04/que-es-inteligencia-artificial.jpg",
      idiom: "Español",
      price: 29.99,
      duration: "2 meses",
      skills: [
        "Inteligencia artificial",
        "aprendizaje automático",
        "programación",
      ],
      difficulty: "Básico",
      instructor: "María García",
      category: ["Inteligencia artificial", "mundo TI", "Tecnología"],
      ratings: 4.2,
      asset: false,
    },
 
   
  ];
  

  export  default cursos