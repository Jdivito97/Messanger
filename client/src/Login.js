import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as BubbleSVG } from "./Svg/bubble.svg";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import "./Signup_Login.css";
const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <>
      <div className="banner">
        <BubbleSVG className="svg" />
        <h4>Converse with anyone, with any language</h4>
      </div>
      <Grid container justifyContent="center">
        <Box>
          <Grid className="switchPage" container item>
            <Typography className="tyopgraphy">
              Don't have an account?
            </Typography>
            <Link className="link" href="/register" to="/register">
              <Button className="topBtn">Create account</Button>
            </Link>
          </Grid>
          <form className="inputs" onSubmit={handleLogin}>
            <h1 className="inputHeader">Welcome Back!</h1>
            <Grid>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    className="input"
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  className="input"
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid>
                <Button
                  className="bottomBtn"
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </>
  );
};

export default Login;
