import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {pink,orange } from '@mui/material/colors';
export default function Layout(props) {
    const theme = createTheme({
        palette: {
          primary: {
            main:orange[600],
          },
         secondary:{
          main:pink[500],
         },
         
        },
      }
      
      );
  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
     
      <main>{props.children}</main>
 
      </ThemeProvider>
    </div>
    </>
  )
}
