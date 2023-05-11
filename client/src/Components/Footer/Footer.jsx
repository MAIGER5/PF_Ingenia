import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import styled from "./Footer.module.css"

export default function Footer() {
  return (
    <Box sx={{marginTop:10}}>
      <div className={styled.footer}>.</div>
       <Typography variant="h5" color="primary" >Ingenia</Typography>
    </Box>
  )
}
