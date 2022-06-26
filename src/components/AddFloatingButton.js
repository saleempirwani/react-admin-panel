import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add, Close } from "@material-ui/icons";
import React, { useState } from "react";
import Post from "./Post";

export default function AddFloatingButton() {
  // State
  const [openModal, setOpenModal] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Tooltip title="Add post">
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => setOpenModal(true)}
        >
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={openModal}>
        <Container className={classes.modalContainer}>
          <Grid container justifyContent="flex-end">
            <Close
              className={classes.closeIcon}
              onClick={() => setOpenModal(false)}
            />
          </Grid>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                fullWidth
                label="Title"
                placeholder="Enter post title"
                variant="outlined"
              />
            </div>

            <div className={classes.item}>
              <TextField
                fullWidth
                label="Description"
                placeholder="Tell your story..."
                multiline
                rows={4}
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <TextField fullWidth select label="Visibility" value="public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>

            <div className={classes.item}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="comments">
                <FormControlLabel
                  value="friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />

                <FormControlLabel
                  value="everyone"
                  control={<Radio size="small" />}
                  label="Everyone"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="No body"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Grid container justifyContent="center">
                <Button variant="outlined" color="primary">
                  Create
                </Button>
              </Grid>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    width: "40%",
    height: 550,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    paddingTop: theme.spacing(1),
    backgroundColor: "white",
    borderRadius: 3,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      paddingTop: theme.spacing(5),
    },
  },
  closeIcon: {
    marginBottom: theme.spacing(2),
    color: "red",
    cursor: "pointer",
    display: "flex",
  },
  item: {
    marginBottom: theme.spacing(2),
  },
}));
