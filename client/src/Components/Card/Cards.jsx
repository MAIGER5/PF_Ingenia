
import CardHome from './CardHome'
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Cards() {

  const curs = useSelector((state)=> state.allCourse)
  const cursos = curs.slice(0, 6);

    return (
        <Box  >
        <Grid container spacing={10}>
          {cursos.map((curso) => (
            <Grid item xs={2} sm={6} md={4} key={curso.idCourse}>
              <CardHome
                idCourse = {curso.idCourse}
                title={curso.title}
                lenguage={curso.lenguage}
                image={curso.image}
                instructorLastName={curso.Users[0]?.lastname}
                instructorName={curso.Users[0]?.name}
                price={curso.price}
                habilities={curso.habilities}
              />
            </Grid>
          ))}
        </Grid>
        </Box>
      );
    }