import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function MetodoDePago() {
  const [value, setValue] = useState('paypal');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack
    sx={{ marginTop:-10 }}
          direction="column"
          alignItems="flex-start"
          spacing={3}>
          
       
        
        <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Método de Pago</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="paypal" control={<Radio />} label="paypal" />
        
      </RadioGroup>
    </FormControl>
        </Stack>
  )
}