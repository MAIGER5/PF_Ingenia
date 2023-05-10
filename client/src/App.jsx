import React from 'react'
import './App.css'
import FiltersButton from './Components/Filters/FiltersButtons/FiltersButton'
import Order from './Components/Filters/OrderButton/Order'
import { Stack } from '@mui/material'

function App() {


  return (
    <> 
    <Stack
    direction="row" 
    spacing={2}
    >
     <FiltersButton/>
     <Order/>
     </Stack>
    </>
  )
}

export default App
