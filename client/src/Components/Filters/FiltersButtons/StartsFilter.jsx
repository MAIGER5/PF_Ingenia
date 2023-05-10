import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function StartsFilter() {
  const [selectedOption, setSelectedOption] = useState(5);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selectedOption}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="5" control={<Radio color='secondary' />}
          label={<Stack direction="row">
            <Rating name="read-only" value="5" readOnly sx={{ color: "#e91e63" }} />
            <Typography component="legend" >5 estrellas</Typography>
          </Stack>} />
        <FormControlLabel value="4" control={<Radio color='secondary' />} label={<Stack direction="row">
          <Rating name="read-only" value="4" readOnly sx={{ color: "#e91e63" }} />
          <Typography component="legend" >4 estrellas</Typography>
        </Stack>} />
        <FormControlLabel value="3" control={<Radio color='secondary' />} label={<Stack direction="row">
          <Rating name="read-only" value="3" readOnly sx={{ color: "#e91e63" }} />
          <Typography component="legend" >3 estrellas</Typography>
        </Stack>} />
      </RadioGroup>
    </Box>
  );
}