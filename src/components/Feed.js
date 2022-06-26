import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Post from "./Post";

export default function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Post />
      ))}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));
