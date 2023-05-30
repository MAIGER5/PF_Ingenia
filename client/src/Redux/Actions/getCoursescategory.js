import axios from 'axios';

export const GET_COURSESCATEGORY = 'GET_COURSESCATEGORY';

export function getCoursesCategory(categoria) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${import.meta.env.VITE_HOST}/courses/`);
      const cursos = response.data;
      
      const cursosFiltrados = cursos.filter(element => {
        return element.Categories && element.Categories.some(category => categoria.includes(category.name));
      });
      
      dispatch({ type: GET_COURSESCATEGORY, payload: cursosFiltrados });
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }
}