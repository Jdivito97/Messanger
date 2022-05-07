import React, { useState, useEffect } from "react";
import { ReactComponent as BubbleSVG } from "./Svg/bubble.svg";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { StartupStyles } from "./StartupStyles";
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
      <Box className={classes.banner}>
        <BubbleSVG className={classes.svg} />
        <Typography className={classes.bannerText}>
          Converse with anyone, with any language
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Box>
          <Grid className={classes.switchPage} container item>
            <Typography className={classes.switchText}>
              Already have an account?
            </Typography>
            <Link className={classes.link} href="/login" to="/login">
              <Button className={classes.topBtn}>Login</Button>
            </Link>
          </Grid>

          <form className={classes.inputs} onSubmit={handleRegister}>
            <Typography className={classes.inputHeader}>
              Create an Account.
            </Typography>{" "}
            <Grid>
              <Grid>
                <FormControl>
                  <TextField
                    className={classes.input}
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <TextField
                    className={classes.input}
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    className={classes.input}
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    className={classes.input}
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Button
                className={classes.bottomBtn}
                type="submit"
                variant="contained"
                size="large"
              >
                Create
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>{" "}
    </>
  );
};

export default Signup;
