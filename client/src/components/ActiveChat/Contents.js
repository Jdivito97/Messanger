import React from "react";
import { Box, Typography } from "@material-ui/core";
import Images from "./Images";
const Contents = ({ text, attachments, bubbles, texts }) => {
  return (
    <>
      {attachments.length === 1 ? (
        <>
          <Images attachments={attachments} />
          <Box className={bubbles}>
            {text && <Typography className={texts}>{text}</Typography>}
          </Box>
        </>
      ) : (
        <>
          <Box className={bubbles}>
            {text && <Typography className={texts}>{text}</Typography>}
          </Box>
          <Images attachments={attachments} />
        </>
      )}
    </>
  );
};

export default Contents;
