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
import { StartupStyles } from "./StartupStyles";

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
              Don't have an account?
            </Typography>
            <Link className={classes.link} href="/register" to="/register">
              <Button className={classes.topBtn}>Create account</Button>
            </Link>
          </Grid>
          <form className={classes.inputs} onSubmit={handleLogin}>
            <Typography className={classes.inputHeader}>
              Welcome Back!
            </Typography>
            <Grid>
              <Grid>
                <FormControl margin="normal" required>
                  <TextField
                    className={classes.input}
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <FormControl margin="normal" required>
                <TextField
                  className={classes.input}
                  label="Password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
              <Grid>
                <Button
                  className={classes.bottomBtn}
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
