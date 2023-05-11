import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import SingUp from './Pages/SingUp';
import CoureseDetail from './Pages/CoureseDetail';
import CategoryCourses from './Pages/CategoryCourses';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar/NavBar';

function App() {
return (
    <> 
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SingUp" element={<SingUp/>} />
          <Route path="/CoureseDetail/:id" element={<CoureseDetail/>} />
          <Route path="/CategoryCourses" element={<CategoryCourses/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
