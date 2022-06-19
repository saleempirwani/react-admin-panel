import React, { useState } from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Notifications, Search } from "@material-ui/icons";

export default function NavBar() {
  const [openSearch, setOpenSearch] = useState(false);

  const classes = useStyles({ openSearch });

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.titleLg}>
          Admin Panel
        </Typography>
        <Typography variant="h6" className={classes.titleSm}>
          Dashboard
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel
            className={classes.cancelBtn}
            onClick={() => setOpenSearch(false)}
          />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchBtn}
            onClick={() => setOpenSearch(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  titleSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    background: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      background: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearch ? "flex" : "none"),
      width: "60%",
    },
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancelBtn: {
    display: (props) => (props.openSearch ? "flex" : "none"),
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.openSearch ? "none" : "flex"),
  },
  badge: { marginRight: theme.spacing(2) },
}));
