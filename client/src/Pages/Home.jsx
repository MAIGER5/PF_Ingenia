import React from 'react'
import HomeComponent from '../Components/Home/Homevista/Home'
import NotificationSnackbar from '../Components/NotificationSnackbar/NotificationSnackbar'
import { Stack } from '@mui/material'


export default function Home() {
  return (
    <Stack
   justifyContent="center"
    alignItems="center"
    spacing={2}
    >
      {/* <NotificationSnackbar/> */}
      <HomeComponent/>
    </Stack>
  )
}
