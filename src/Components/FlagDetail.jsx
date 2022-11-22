import { useState,useEffect } from "react";
import{useParams ,useNavigate} from 'react-router-dom'
import { getDataFromPokemon } from "../Services";
import{Container,Grid,Chip,Button} from'@mui/material'
import React from 'react'

const FlagDetail = () => {
    const {name}= useParams();
    const history = useNavigate();




const fetchCountry = async ()=>{
    const response = await getDataFromPokemon(
        `https://restcountries.com/v3.1/name/${name}`
    );
    console.log(response);
} 

useEffect(()=>{
    fetchCountry()
},[])

  return (
    <Container>
        <h1>ola nueva pagina</h1>
        <Button variant="outlined" onClick={()=>history(-1)}>
            Back/volver
        </Button>
      
    </Container>
  )
}

export default FlagDetail;
