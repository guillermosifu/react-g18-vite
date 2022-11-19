import React from "react";
import{Button} from '@mui/material'
import { getDataFromPokemon } from "../Services";
import { useState } from "react";



const PokemonDetail=(props)=>{

   
    const[pokemonData,setPokemonData]= useState({})

    const fetchDetailFromPokemon = async ()=>{
        const pokemon = await getDataFromPokemon(props.url);
        setPokemonData(pokemon)
    };






    return(
        <div>
          <Button variant="contained">ver detalle</Button>
        </div>
    )
}


export default PokemonDetail;