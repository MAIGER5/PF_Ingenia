import React, { useEffect, useState } from 'react'
import { Box, Stack,  } from '@mui/material';
import { useSelector } from 'react-redux';
import CardCategory from './CardCategory';

import PaginationButtons from '../../Pagination/Pagination'

export default function Cardsresulcategory() {
  const cursos = useSelector((state) => state.filtercourses);
  const cursosInitiales = useSelector((state) => state.allCourseCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cursos.length > 0 ? cursos.slice(indexOfFirstItem, indexOfLastItem) : cursosInitiales.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCurrentPage(1); 
  }, [cursos]);

  const totalItems = cursos.length > 0 ? cursos.length : cursosInitiales.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <Box>
        <Stack spacing={6}>
          {currentItems.map((curso) => (
            <CardCategory
              key={curso.idCourse}
              idCourse={curso.idCourse}
              title={curso.title}
              description={curso.description}
              duration={curso.duration}
              dificulty={curso.dificulty}
              price={curso.price}
              image={curso.image}
              lenguage={curso.lenguage}
            />
          ))}
        </Stack>
        <Stack
        sx={{marginTop:4}}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
        {totalItems > itemsPerPage && (
        <PaginationButtons
        
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      )}
      </Stack>
      </Box>

      
    </>
  );
}