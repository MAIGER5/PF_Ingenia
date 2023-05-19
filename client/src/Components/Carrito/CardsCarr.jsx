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
                instructorName={ele.Users.map(use=> use.name)}
                instructorLastName={ele.Users.map(use=> use.lastname)}
                title={ele.title}
                description={ele.description}
                duration={ele.duration}
                dificulty={ele.dificulty}
                price={ele.price}
                image={ele.image}
                lenguage={ele.lenguage}
                categories={ele.Categories.map(cat => cat.name)}
              />
            )): "nada"
        }
    </div>
  );
}
