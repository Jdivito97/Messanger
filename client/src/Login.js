import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Banner from "./components/Startup/Banner";
import SwitchPage from "./components/Startup/SwitchPage";
import LoginInputs from "./components/Startup/LoginInputs";
import { Grid, Box } from "@material-ui/core";
import { StartupStyles } from "./components/Startup/StartupStyles";

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = StartupStyles();

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
      <Banner />
      <Grid container justifyContent="center">
        <Box>
          <SwitchPage
            switchPageText="Don't have an account?"
            buttonText="Create account"
            href="/register"
            to="/register"
          />
          <form className={classes.inputs} onSubmit={handleLogin}>
            <LoginInputs inputHeader="Welcome back!" buttonText="Login" />
          </form>
        </Box>
      </Grid>
    </>
  );
};

export default Login;
