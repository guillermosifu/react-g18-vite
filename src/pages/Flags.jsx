import React from "react";
import { getDataFromPokemon } from "../Services/index";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function Flags() {
  const [countries, setCountries] = useState([]);
  const[region,setRegion] = useState("");



  //funcione de compoenente
  const fetchContries = async () => {
    const response = await getDataFromPokemon(
      "https://restcountries.com/v3.1/all"
    );
    setCountries(response);
  };

  const handleRegion =async(e)=>{
    setRegion(e.target.value);
    if(e.target.value ==="all"){
        fetchContries();
        return;
    }


  }



//vanmos a crear una funcion la cual se jalle los paises









  useEffect(() => { 
    fetchContries();
  }, []);

  return (
    <Container>
        <h1>banderas</h1>
        <Grid container spacing ={3}>
            <Grid item md={6}>
                <TextField label="Busca tu pais" fullWidth/>
            </Grid>
            <Grid item md={6}>
                <FormControl fullWidth>
                    <InputLabel>Filtra tu continente</InputLabel>
                    <Select label="filtra tu continente" onChange={handleRegion}>
                        <MenuItem value ="all">Todos los continentes</MenuItem>
                        <MenuItem value ="Africa">Africa</MenuItem>
                        <MenuItem value ="Americas">Americas</MenuItem>
                        <MenuItem value ="Europe">Europe</MenuItem>
                        <MenuItem value ="Oceania">Oceania</MenuItem>
                        <MenuItem value ="Asia">Asia</MenuItem>




                    </Select>
                </FormControl>

            </Grid>
        </Grid>
        
    </Container>
  )
  
}

export default Flags;
