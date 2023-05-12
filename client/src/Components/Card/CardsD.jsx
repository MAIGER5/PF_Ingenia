import React from 'react'
import CardDetailCurso from './CardDetailCurso';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

function CardsD(cursos) {

  const {id} = useParams();
  const cursol = cursos.cursos.filter((ele)=> ele.IdCuros == id)

    return (
      <Grid>
        {
          cursol.map((ele)=> 
            <CardDetailCurso
              key={ele.title}
              title={ele.title}
              description={ele.descriction}
              imgCurso={ele.imgCurso}
              instructor={ele.instructor}
              price={ele.price}
              ratings={ele.ratings}
            />
          )
        }
      </Grid>
    );
}

export default CardsD;