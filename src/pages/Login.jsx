import React from "react";
import { Grid, TextField, Card, CardContent, Button } from "@mui/material";
import '../App.css'
function Login() {
  return (
    <Grid className="login" container alignItems="center" justifyContent="space-around">
      <Grid item md={6}>
        <img
          src="https://codigo.edu.pe/public/img/ban-main.png"
          width={800}
          alt=""
        />
      </Grid>
      <Grid>
        <Card>
          <CardContent className="content">
            <h5>Bienvenidos</h5>
            <p>a la comunidad del grupo G18</p>
            <Grid container spacing={3} m={1}>
              <TextField label="Email" name="email" />
            </Grid>
            <Grid item md={12} mt={5}>
              <TextField
                label="password"
                fullWidth
                name="password"
                type="password"
              />
            </Grid>
            <Grid item md={12} mt={5}>
              <Button variant="contained" sx={{backGroundColor:"#000"}} fullWidth size="large">
                Inicia Sesion
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
