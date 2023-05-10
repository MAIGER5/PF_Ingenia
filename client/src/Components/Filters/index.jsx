import { Box, Stack } from '@mui/material'
import React from 'react'
import Order from './OrderButton/Order'
import FiltersButton from './FiltersButtons/FiltersButton'

export default function FiltersComponets() {
  return (
    <Box>
    <Stack direction="row" spacing={2}>
    <FiltersButton/>
    <Order/>
    </Stack>
    </Box>
  )
}
