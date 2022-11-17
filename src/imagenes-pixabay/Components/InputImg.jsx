import{useState} from "react"
 
 
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
        </div>

    )
 }

 export default InputImg;