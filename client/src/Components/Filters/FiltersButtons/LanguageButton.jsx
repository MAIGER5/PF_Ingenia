import React, { useState } from 'react'
import Box from '@mui/material/Box';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';




export default function LanguageButton() {
  const [selectedOption, setSelectedOption] = useState('Diseño Web');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
 
  return (
    <Box>
    <RadioGroup value={selectedOption} onChange={handleChange}>
      <FormControlLabel
        value="Ingles"
        control={<Radio color="secondary" />}
        label="Ingles"
      />
      <FormControlLabel
        value="Español"
        control={<Radio color="secondary" />}
        label="Español"
      />
      
    </RadioGroup>
  </Box>
  )
}