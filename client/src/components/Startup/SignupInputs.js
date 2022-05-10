import React from "react";
import { StartupStyles } from "./StartupStyles";
import InputField from "./InputField";
import {
  FormControl,
  FormHelperText,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

const SignupInputs = (props) => {
  const { buttonText, inputHeader, nullErrorMessage, errorMessage } = props;
  const classes = StartupStyles();

  return (
    <>
      <Typography className={classes.inputHeader}>{inputHeader}</Typography>
      <Grid>
        <Grid>
          <FormControl>
            <InputField
              ariaLabel="username"
              label="Username"
              name="username"
              type="text"
              required
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl>
            <InputField
              label="E-mail address"
              ariaLabel="e-mail address"
              type="email"
              name="email"
              required
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl error={nullErrorMessage}>
            <InputField
              ariaLabel="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="password"
              required
            />
            <FormHelperText>{errorMessage}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl error={errorMessage}>
            <InputField
              label="Confirm Password"
              ariaLabel="confirm password"
              type="password"
              inputProps={{ minLength: 6 }}
              name="confirmPassword"
              required
            />
            <FormHelperText>{errorMessage}</FormHelperText>
          </FormControl>
        </Grid>
        <Button
          className={classes.bottomBtn}
          type="submit"
          variant="contained"
          size="large"
        >
          {buttonText}
        </Button>
      </Grid>
    </>
  );
};
export default SignupInputs;
