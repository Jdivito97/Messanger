import React from "react";
import InputField from "./InputField";
import { Typography, Grid, FormControl, Button } from "@material-ui/core";
import { StartupStyles } from "./StartupStyles";

const LoginInputs = (props) => {
  const { buttonText, inputHeader } = props;
  const classes = StartupStyles();

  return (
    <>
      <Typography className={classes.inputHeader}>{inputHeader}</Typography>
      <Grid>
        <Grid>
          <FormControl margin="normal" required>
            <InputField
              ariLabel="username"
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
        </Grid>

        <Grid>
          <FormControl margin="normal" required>
            <InputField
              ariLabel="password"
              label="Password"
              name="password"
              type="password"
            />
          </FormControl>
        </Grid>

        <Grid>
          <Button
            className={classes.bottomBtn}
            type="submit"
            variant="contained"
            size="large"
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default LoginInputs;
