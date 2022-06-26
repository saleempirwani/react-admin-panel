import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import {
  AddFloatingButton,
  Feed,
  LeftBar,
  NavBar,
  RightBar,
} from "../components";

export default function Dashboard() {
  // State
  const [openMenu, setOpenMenu] = useState(false);

  const classes = useStyles({ openMenu });

  return (
    <div>
      <NavBar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Grid container>
        <Grid item sm={2} xs={2} className={classes.leftBar}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={openMenu ? 10 : 12}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <AddFloatingButton />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftBar: (props) => ({
    display: props.openMenu ? "flex" : "none",
  }),
}));
