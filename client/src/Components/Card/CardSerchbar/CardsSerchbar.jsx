import React, { useEffect, useState } from 'react'
import { Box, Stack, Button,  } from '@mui/material';
import { useSelector } from 'react-redux';
import CardSerbar from './SIN USAR CardSerchbar';
import PaginationButtons from "../../Pagination/Pagination"
import CardCategory from '../CardsVistaCategory/CardCategory';


export default function Cardsresulserchbar() {
  const cursos = useSelector((state) => state.allCourseCategory);
  const cursosfiltrados = useSelector((state) => state.filtercourses);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =3;

  useEffect(() => {
    setCurrentPage(1);
  }, [cursosfiltrados]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cursosfiltrados.length > 0 ? cursosfiltrados.slice(indexOfFirstItem, indexOfLastItem) : cursos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = cursosfiltrados.length > 0 ? cursosfiltrados.length : cursos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Box>
      <Stack spacing={6}>
        {currentItems.map((curso) => (
          <CardCategory
          key={curso.idCourse}
          idCourse={curso.idCourse}
          instructorName={curso.Users.map(use=> use.name)}
          instructorLastName={curso.Users.map(use=> use.lastname)}
          categories={curso.Categories.map(cat=> cat.name)}
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
      {totalItems > itemsPerPage && (
        <PaginationButtons
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      )}
    </Box>
  );
}