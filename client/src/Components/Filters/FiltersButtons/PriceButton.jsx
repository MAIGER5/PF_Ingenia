import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice } from '../../../Redux/Actions/filterByPrice';

function calculateValue(value) {
  return value;
}

export default function PriceButton() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const cursos = useSelector(state => state.allCourseCategory);
  const filteredCursos = cursos.filter(curso => curso.price === value);

  useEffect(() => {
    if (value) {
      dispatch(filterByPrice(filteredCursos));
    }
  }, [value, dispatch, filteredCursos]);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 200, marginLeft: 3 }}>
      <Slider
        value={value}
        min={10}
        max={100}
        step={10}
        marks
        scale={calculateValue}
        getAriaValueText={(value) => `${value}`}
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="non-linear-slider"
      />
      <Typography id="non-linear-slider" gutterBottom>
        $ {value}
      </Typography>
      {filteredCursos.length === 0 && <Typography color="secondary">No hay cursos de este precio.</Typography>}
    </Box>
  );
}