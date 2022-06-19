import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import React from "react";

export default function LeftBar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {},
  text: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
