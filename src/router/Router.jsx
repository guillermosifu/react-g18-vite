import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "../App"
import Header from "../Header"
import Headerr from "../Components/Headerr"
import Git from "../gitSearch/Git"
import Home from "../pages/pokemon"
import Flags from "../pages/Flags"
import PrincipalImg from "../imagenes-pixabay/Components/PrincipalImg"
import Private from "../private"
import Login from "../pages/Login"
import FlagDetail from "../Components/FlagDetail"




const Router =()=>{
  return (

    
    <BrowserRouter>
    <Headerr/>
    <Routes>  
        <Route path= "/" element ={<Login/>} />
         <Route path="/pokemon" element={<Home/>}/>
         <Route path="/banderas" element={<Flags/>}/>
         <Route path="/banderas/detail/:name" element={<FlagDetail/>}/>
        {/* rutas privates */}
        <Route element={<Private/>}>
             <Route path="/git" element={<Git/>}/>
 
       
  
        <Route path="/header" element={<Header/>}/>  
        <Route path="/imagen" element={<PrincipalImg/>}/>  
        </Route>
         
    </Routes>

    </BrowserRouter>


  )
}

export default Router;