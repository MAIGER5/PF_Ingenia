import React from 'react'
import { useSelector } from 'react-redux'
import { CardCarrito } from './CardCarrito';



export const CardsCarr = () => {

  const carri = useSelector((state)=>state.allCarrito)

  return (
    <div>
        {
            carri? carri.map((ele)=> (  
              <CardCarrito
                key={ele.idCourse}
                idCourse={ele.idCourse}
                instructorName={ele.Users? ele.Users[0].name : "nada"}
                instructorLastName={ele.Users? ele.Users[0].lastname : "nada"}
                title={ele.title}
                description={ele.description}
                duration={ele.duration}
                dificulty={ele.dificulty}
                price={ele.price}
                image={ele.image}
                lenguage={ele.lenguage}
                categories={ele.Categories[0].name}
              />
            )): "nada"
        }
    </div>
  );
}
