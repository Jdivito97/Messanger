import React from "react";
import { TextField } from "@material-ui/core";
import { StartupStyles } from "./StartupStyles";

const InputField = (props) => {
  const { ariaLabel, label, name, type, inputProps } = props;
  const classes = StartupStyles();

  return (
    <TextField
      className={classes.input}
      aria-label={ariaLabel}
      label={label}
      name={name}
      type={type}
      inputProps={inputProps}
      required
    />
  );
};
export default InputField;
