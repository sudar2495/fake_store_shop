import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (input && input.email && input.password) {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: input.email,
        password: input.password,
      });
      console.log(response);
    }
  };

  return (
    <>
      <div
        style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Paper variant="outlined" square>
          <div
            style={{
              width: "500px",
              padding: "25px",
            }}
          >
            <form noValidate autoComplete="off" style={{ padding: "20px" }}>
              <Grid container direction="column" justify="center" spacing={2}>
                <Grid item alignItems="center" justify="center">
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={input.email}
                    onChange={(e) => changeInput(e)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    name="password"
                    fullWidth
                    label="Password"
                    value={input.password}
                    onChange={(e) => changeInput(e)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => formSubmit(e)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Login;
