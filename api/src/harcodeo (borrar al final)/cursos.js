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
];

module.exports = cursos;
