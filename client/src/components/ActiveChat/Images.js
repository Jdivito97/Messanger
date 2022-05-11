import React from "react";
import { Box } from "@material-ui/core";

const Images = ({ attachments }) => {
  const styles = {
    root:
      attachments.length === 1
        ? { maxWidth: "45vw", height: 100 }
        : { maxWidth: "45vw", height: 60 },
    image:
      attachments.length === 1
        ? {
            height: 100,
            width: 100,
            margin: 0,
            objectFit: "cover",
            borderRadius: "7px",
          }
        : { height: "100%", marginLeft: 5, borderRadius: "7px" },
  };
  return (
    <Box style={styles.root}>
      {attachments.map((url) => {
        return <img key={url} src={url} alt={url} style={styles.image} />;
      })}
    </Box>
  );
};

export default Images;
