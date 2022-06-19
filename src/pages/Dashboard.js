import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { LeftBar, NavBar } from "../components";

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}></Grid>
        <Grid item sm={3} className={classes.right}></Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
