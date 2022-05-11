import React from "react";
import { Box, Typography } from "@material-ui/core";
import Images from "./Images";
const Contents = ({ text, attachments, bubbles, texts }) => {
  return (
    <>
      {attachments.length > 1 && <Images attachments={attachments} />}

      {attachments.length === 1 && <Images attachments={attachments} />}
      <Box className={bubbles}>
        {text && <Typography className={texts}>{text}</Typography>}
      </Box>
    </>
  );
};

export default Contents;
