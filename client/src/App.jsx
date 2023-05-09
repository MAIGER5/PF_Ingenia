import React from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Footer from "../src/Components/Footer"
function App() {


  return (
    <> 
     <Button variant="contained" color='secondary' >Primary</Button>
     <Button variant="contained">Contained</Button>
     <Footer/>
    </>
  )
}

export default App
