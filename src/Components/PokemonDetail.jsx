import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slider,
  Chip,
} from "@mui/material";
import { getDataFromPokemon } from "../Services";
import { useState } from "react";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState();

  const [pokemonData, setPokemonData] = useState({});
  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  const handleOpenDialog = async () => {
    //cuando se abre el modal abrir --sera true
    //priemro se haga console los de abir que es false y lugo recien pase a true
    if (!abrir) {
      //ejecutar la funcion del api
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">
        ver detalle
      </Button>
      <Dialog
        open={abrir}
        onClose={handleOpenDialog}
        fullWidth={"md"}
        maxWidth={"md"}
      >
        <DialogContent>
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2 className="name-pokemon">{props.apodo}</h2>
              <Grid container>
                <Grid item md={6}>
                  <h4>habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRigth: 2 }}
                    />
                  ))}
                  <h4>Datos</h4>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="warning"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <Chip
                    color="success"
                    sx={{ marginRight: 2 }}
                    label={`${pokemonData.weight / 10}kg`}
                  />
                  <Chip
                    color="success"
                    sx={{ marginRight: 2 }}
                    label={`${pokemonData.height / 10}kg`}
                  />
                  <h4>Puntos de Base</h4>
                  {pokemonData.stats.map((stat) => (
                    <div>
                      <h5>{stat.stat.name}</h5>
                      <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}
                </Grid>
                <Grid item md={6}>
                  <img
                    width={350}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          )}

          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
