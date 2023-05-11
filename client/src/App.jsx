import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login/Login';
import SingupUsuario from './Pages/SignupUsuario/SignupUsuario';
import SignupVendedor from './Pages/SignupVendedor/SignupVendedor';
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
          <Route path="/SignupUsuario" element={<SingupUsuario/>} />
          <Route path="/SignupVendedor" element={<SignupVendedor/>} />
          <Route path="/CoureseDetail/:id" element={<CoureseDetail/>} />
          <Route path="/CategoryCourses" element={<CategoryCourses/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
