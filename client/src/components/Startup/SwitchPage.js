import React from "react";
import { Link } from "react-router-dom";
import { StartupStyles } from "./StartupStyles";
import { Grid, Typography, Button } from "@material-ui/core";

const SwitchPage = (props) => {
  const { switchPageText, buttonText, href, to } = props;
  const classes = StartupStyles();

  return (
    <Grid className={classes.switchPage} container item>
      <Typography className={classes.switchText}>{switchPageText}</Typography>
      <Link className={classes.link} href={href} to={to}>
        <Button className={classes.topBtn}>{buttonText}</Button>
      </Link>
    </Grid>
  );
};
export default SwitchPage;
