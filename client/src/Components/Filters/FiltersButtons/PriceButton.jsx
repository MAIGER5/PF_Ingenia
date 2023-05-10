import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function calculateValue(value) {
  return value;
}

export default function PriceButton() {
  const [value, setValue] = useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 200, marginLeft:3 }}>
      
      <Slider
        value={value}
        min={5}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={(value) => `${value}`}
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="non-linear-slider"
      />
      <Typography id="non-linear-slider" gutterBottom>
        $ {value}
      </Typography>
    </Box>
  );
}