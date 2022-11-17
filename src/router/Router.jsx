import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "../App"
import Header from "../Header"
import Git from "../gitSearch/Git"
import Home from "../pages/pokemon"
import Flags from "../pages/Flags"
import PrincipalImg from "../imagenes-pixabay/Components/PrincipalImg"
import Login from "../pages/Login"



const Router =()=>{
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<App/>}/>  
        <Route path= "/login" element ={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/banderas" element={<Flags/>}/>
        <Route path="/git" element={<Git/>}/>
        <Route path="/header" element={<Header/>}/>  
        <Route path="/imagen" element={<PrincipalImg/>}/>  
         
    </Routes>

    </BrowserRouter>

  )
}

export default Router;