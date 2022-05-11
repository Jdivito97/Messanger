import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  IconButton,
  InputLabel,
  InputAdornment,
  Input,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { MdContentCopy } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
  muiInput: {
    display: "none",
  },
  smile: {
    color: "#bfc9db",
  },
  imgSelect: {
    color: "#bfc9db",
  },
}));

const MessageInput = ({ otherUser, conversationId, user, postMessage }) => {
  const imgCloudURL = `https://api.cloudinary.com/v1_1/dtvk7vxeq/image/upload`;
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getImgURLs = async (files) => {
    const fileArray = Object.values(files);

    const altURLs = await Promise.all(
      fileArray.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "uploadIMG");

        return axios.create().post(imgCloudURL, formData);
      })
    );
    return altURLs;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const queuedFiles = formElements["filesArray"].files;
    let imgURLs = [];
    if (queuedFiles.length) {
      imgURLs = (await getImgURLs(queuedFiles)).map((img) => {
        return img.data.secure_url;
      });
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imgURLs,
    };

    await postMessage(reqBody);
    setText("");
    formElements["filesArray"].value = null;
  };

  return (
    <form method="post" className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="start">
              <IconButton>
                <VscSmiley className={classes.smile} />
              </IconButton>
              <Input
                className={classes.muiInput}
                type="file"
                name="filesArray"
                accept="image/*"
                id="icon-button-file"
                inputProps={{
                  display: "none",
                  multiple: true,
                }}
              />
              <InputLabel htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" component="span">
                  <MdContentCopy className={classes.imgSelect} />
                </IconButton>
              </InputLabel>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default MessageInput;
