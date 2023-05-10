import React, { useState } from 'react'
import Box from '@mui/material/Box';

import { FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';

export default function CategoryButton() {
  const [selectedOption, setSelectedOption] = useState('Diseño Web');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box>
      <RadioGroup value={selectedOption} onChange={handleChange}>
        <FormControlLabel
          value="Diseño Web"
          control={<Radio color="secondary" />}
          label="Diseño Web"
        />
        <FormControlLabel
          value="Fullstack"
          control={<Radio color="secondary" />}
          label="Fullstack"
        />
        <FormControlLabel
          value="Análisis de datos"
          control={<Radio color="secondary" />}
          label="Análisis de datos"
        />
      </RadioGroup>
    </Box>
  );
}