import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Banner from "./components/Startup/Banner";
import SwitchPage from "./components/Startup/SwitchPage";
import { Grid, Box } from "@material-ui/core";
import { StartupStyles } from "./components/Startup/StartupStyles";
import SignupInputs from "./components/Startup/SignupInputs";
const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = StartupStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
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
            switchPageText="Already have an account?"
            buttonText="Login"
            href="/login"
            to="/login"
          />

          <form className={classes.inputs} onSubmit={handleRegister}>
            <SignupInputs
              inputHeader="Create an account."
              buttonText="Create"
              nullErrorMessage={!!formErrorMessage.confirmPassword}
              errorMessage={formErrorMessage.confirmPassword}
            />
          </form>
        </Box>
      </Grid>{" "}
    </>
  );
};

export default Signup;
