import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { filterByLanguage } from '../../../Redux/Actions/filterporlenguaje';


export default function LanguageButton() {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const cursos = useSelector(state => state.allCourseCategory);
 

  useEffect(() => {
    if (selectedOption) {
      const filteredItems = cursos.filter(curso => curso.lenguage === selectedOption);
      dispatch(filterByLanguage(filteredItems));
      
    }
  }, [selectedOption]);

  const handleChange = event => {
    const selectedLanguage = event.target.value;
    setSelectedOption(selectedLanguage);
  };



  return (
    <Box>
      <RadioGroup value={selectedOption} onChange={handleChange}>
        <FormControlLabel
          value="ENGLISH"
          control={<Radio color="secondary" />}
          label="ENGLISH"
        />
        <FormControlLabel
          value="ESPAÑOL"
          control={<Radio color="secondary" />}
          label="ESPAÑOL"
        />
      </RadioGroup>
     
    </Box>
  );
}