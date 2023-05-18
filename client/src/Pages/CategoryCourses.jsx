import React, { useEffect } from 'react'
import CategoryCoursesComponest from '../Components/CategoryCoures/CategoryCoursesComponest'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux';
import { getCoursesCategory } from '../Redux/Actions/getCoursescategory';
export default function CategoryCourses() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCoursesCategory());
  }, [dispatch])
  return (
   <Box >
    <CategoryCoursesComponest/>
   </Box>
  )
}
