import React, { useEffect } from 'react'
import { Stack,  TextField, Typography} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import ProfileVendedor from '../ProfileVendedor/ProfilevendedorVendedor'
import { getUsiarios } from '../../Redux/Actions/getusers'


export default function MiPerfil() {
    const usuer=useSelector(state=>state.usercrud)
    const idUser=localStorage.getItem("idUser")
    const type=localStorage.getItem("userType")
    console.log(type)

    
    const dispach=useDispatch()
    useEffect(() => {
    dispach(getUsiarios(idUser))
     }, [])
    console.log(usuer)
  return (
    <>
    {
         type==="2"?<ProfileVendedor/> :  < Profile/>
    }
   
  
    </>
  )
}