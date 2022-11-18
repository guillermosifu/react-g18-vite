import { Grid, TextField, Card, CardContent, Button } from "@mui/material";
import { UserContext } from "../Context/UserContext";
import { useContext} from "react";
import "../App.css";

function Login() {
  
  const {user}=useContext(UserContext);

 
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
                    <Grid container sapacing ={3} mt={5}>
                        <TextField
                        label="Email"
                        fullWidth
                        name="email"
                     
                        />
                    </Grid>
                    <Grid item md={12} mt={5}>
                        <TextField
                        label="Password"
                        fullWidth
                        name="password"
                        type="password"
                    
                        />
                    </Grid>
                    <Grid item md={12} mt={3}>
                        <Button
                        sx={{backGroundColor: "#000"}}
                        variant="contained"
                        fullWidth
                        size="large"
                      
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
