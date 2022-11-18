import { Grid, TextField, Card, CardContent, Button } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import swal from "sweetalert2";
import "../App.css";

function Login() {
  const { user, storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = () => {
    if (
      userData.email === "pepe@gmail.com" &&
      userData.password === "12345678"
    ) {
      const user = {
        nombre: "pepe",
        apellido: "zapata",
        edad: 20,
      };
      storeUser(user);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "usuario invalido",
        
      });
    }
  };

  return (
    <Grid
      className="login"
      container
      alignItems="center"
      justifyContent="space-around"
    >
      <Grid item md={6}>
        <img
          src="https://codigo.edu.pe/public/img/ban-main.png"
          width={800}
          alt=""
        />
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <h5>Bienvenidos a tecsup</h5>
            <p>Bienvenido a la comunidad del grupo 18</p>

            <Grid container sapacing={3} mt={5}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                onChange={handleInput}
              />
            </Grid>
            <Grid item md={12} mt={5}>
              <TextField
                label="Password"
                fullWidth
                name="password"
                type="password"
                onChange={handleInput}
              />
            </Grid>
            <Grid item md={12} mt={3}>
              <Button
                sx={{ backGroundColor: "#000" }}
                variant="contained"
                fullWidth
                size="large"
                onClick={handleClickLogin}
              >
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
