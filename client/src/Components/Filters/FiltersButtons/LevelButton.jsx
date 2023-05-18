import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDifficulty } from '../../../Redux/Actions/filterDificulti';

export default function LevelButton() {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const cursos = useSelector(state => state.allCourseCategory);

  useEffect(() => {
    if (selectedOption) {
      const filteredItems = cursos.filter(curso => curso.dificulty === selectedOption);
      dispatch(filterByDifficulty(filteredItems));
      
    }
  }, [selectedOption]);
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
 
  return (
    <Box>
    <RadioGroup value={selectedOption} onChange={handleChange}>
      <FormControlLabel
        value="BASIC"
        control={<Radio color="secondary" />}
        label="BASIC"
      />
      <FormControlLabel
        value="MEDIUM"
        control={<Radio color="secondary" />}
        label="MEDIUM"
      />
      <FormControlLabel
        value="ADVANCED"
        control={<Radio color="secondary" />}
        label="ADVANCED"
      />
     
      
    </RadioGroup>
  </Box>
  )
}
