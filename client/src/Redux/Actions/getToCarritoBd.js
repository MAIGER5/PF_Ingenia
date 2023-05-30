import axios from "axios";

export const GET_TO_CARRITO_BD = 'GET_TO_CARRITO_BD';


// const cleaner = (array) => {
//     return array.map((arr) => {
//         return {

//             idCourse: arr.idCor,
//             instructorName: Array.from(arr.userInstrucotor).shift(),
//             instructorLastName: Array.from(arr.userInstrucotor).pop(),
//             title: arr.title,
//             description: arr.description,
//             duration: arr.price,
//             dificulty: arr.UserIdUser,
//             price: arr.price,
//             image: arr.image,
//             lenguage: arr.price,
//             categories: arr.price
//         };
//     });
// };

export const getToCarritoBd = (idUser) => {
  return async function(dispatch){
    const response = await axios.get(`${import.meta.env.VITE_HOST}/buy/carrito/${idUser}`);
    // const carrito = cleaner(response.data)
    dispatch({type: GET_TO_CARRITO_BD, payload: response.data})
  };
};
