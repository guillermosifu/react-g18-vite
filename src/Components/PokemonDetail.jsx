import React from "react";
import{Button,Dialog,DialogContent, Grid,Slider,Chip} from '@mui/material'
import { getDataFromPokemon } from "../Services";
import { useState } from "react";



const PokemonDetail=(props)=>{

    const[abrir,setAbrir]=useState();
   
    const[pokemonData,setPokemonData]= useState({});
    const fetchDetailFromPokemon = async ()=>{
        const pokemon = await getDataFromPokemon(props.url);
        setPokemonData(pokemon)
    };
    
    const handleOpenDialog = async()=>{
   //cuando se abre el modal abrir --sera true
   //priemro se haga console los de abir que es false y lugo recien pase a true
   if(!abrir){
    //ejecutar la funcion del api 
    await fetchDetailFromPokemon()
   }
   setAbrir(!abrir)
    };


    return(
        <div>
          <Button onClick={handleOpenDialog} variant="contained">ver detalle</Button>
         <Dialog open={abrir} onClose={handleOpenDialog}>
            <DialogContent>


                <Button onClick={handleOpenDialog}>Cerrar</Button>
            </DialogContent>

         </Dialog>








        </div>
    
    )
}


export default PokemonDetail;