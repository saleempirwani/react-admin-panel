import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import LockOutlined from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";

const isMobile = window.innerWidth < 420 ? true : false;

export default function LoginPage() {
  const classes = useStyles();

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Grid>
      <Paper className={classes.paper} elevation={isMobile ? 0 : 3}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography>
            <h2>Sign in</h2>
          </Typography>
        </Grid>

        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Password"
          variant="outlined"
          placeholder="Enter your password"
          type="password"
        />

        <Typography align="right">
          <Link>Forgot password?</Link>
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              className={classes.checkbox}
              checked={rememberMe}
              name="rememberMe"
              onChange={() => setRememberMe(!rememberMe)}
            />
          }
          label="Remember me"
        />

        <Button
          fullWidth
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    margin: "50px auto",
    width: isMobile ? "90%" : "30%",
    height: "70vh",
  },
  avatar: { background: "#50c7a2" },
  button: { background: "#50c7a2", marginTop: "20px" },
  checkbox: { color: "#50c7a2" },
}));
