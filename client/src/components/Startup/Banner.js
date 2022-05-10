import React from "react";
import { ReactComponent as BubbleSVG } from "../../Svg/bubble.svg";
import { Typography, Box } from "@material-ui/core";
import { StartupStyles } from "./StartupStyles";

const Banner = () => {
  const classes = StartupStyles();
  return (
    <Box className={classes.banner}>
      <BubbleSVG className={classes.svg} />
      <Typography className={classes.bannerText}>
        Converse with anyone, with any language
      </Typography>
    </Box>
  );
};
export default Banner;
