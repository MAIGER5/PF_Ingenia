import React, { useState } from 'react'
import Box from '@mui/material/Box';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function LevelButton() {
  const [selectedOption, setSelectedOption] = useState('Diseño Web');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
 
  return (
    <Box>
    <RadioGroup value={selectedOption} onChange={handleChange}>
      <FormControlLabel
        value="Basico"
        control={<Radio color="secondary" />}
        label="Basico"
      />
      <FormControlLabel
        value="intermedio"
        control={<Radio color="secondary" />}
        label="intermedio"
      />
      <FormControlLabel
        value="avanzado"
        control={<Radio color="secondary" />}
        label="avanzado"
      />
      <FormControlLabel
        value="Experto"
        control={<Radio color="secondary" />}
        label="Experto"
      />
      
    </RadioGroup>
  </Box>
  )
}