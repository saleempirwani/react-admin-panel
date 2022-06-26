import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  Home,
  List,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Store,
  TabletMac,
} from "@material-ui/icons";
import React from "react";
import { Colors } from "../assets/styles";

export default function LeftBar() {
  const classes = useStyles();

  const IconsList = [
    { icon: <Home className={classes.icon} />, title: "Home" },
    { icon: <List className={classes.icon} />, title: "Lists" },
    { icon: <PhotoCamera className={classes.icon} />, title: "Camera" },
    { icon: <TabletMac className={classes.icon} />, title: "Apps" },
    { icon: <PlayCircleOutline className={classes.icon} />, title: "Videos" },
    { icon: <Bookmark className={classes.icon} />, title: "Collections" },
    { icon: <Store className={classes.icon} />, title: "Market Place" },
    { icon: <Settings className={classes.icon} />, title: "Settings" },
  ];

  return (
    <Container className={classes.container}>
      {IconsList.map((item, index) => (
        <div key={index} className={classes.item}>
          {item.icon}
          <Typography className={classes.text}>{item.title}</Typography>
        </div>
      ))}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(10),
    backgroundColor: Colors.green,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      borderRight: "1px solid #ece7e7",
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
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
