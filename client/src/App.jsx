import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login/Login';
import SignupUsuario from './Pages/SignupUsuario/SignupUsuario';
import SignupVendedor from './Pages/SignupVendedor/SignupVendedor';
import CoureseDetail from './Pages/CoureseDetail';
import CategoryCourses from './Pages/CategoryCourses';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Pages/Profile/Profile';
import LandingSeller from './Pages/LandingSeller/LandingSeller';
import DetailCourse from './Components/DetailCourse.jsx/DetailCourse';


function App() {
return (
    <> 
    <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignupUsuario" element={<SignupUsuario/>} />
          <Route path="/SignupVendedor" element={<SignupVendedor/>} />
          <Route path="/DetailCourse/:id" element={<DetailCourse/>} />
          <Route path="/CategoryCourses" element={<CategoryCourses/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/LandingSeller" element={<LandingSeller/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
