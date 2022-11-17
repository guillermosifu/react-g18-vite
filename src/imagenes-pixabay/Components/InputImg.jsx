import{useState} from "react"
import { PintadoImg } from "./PintadoImg"
 
 
 const InputImg =()=>{
 const [valorInput,setValorInput]=useState("")
 const captura = (e)=>{
    e.preventDefault()
    const input = document.querySelector('input');
    setValorInput(input.value)
 }

    return(
        <div>
            <form action="">
                <input type="text" />
                <button onClick={captura}>BUSCAR</button>
            </form>
        <PintadoImg/>

        </div>

    )
 }

 export default InputImg;