import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  buttonView: {
    ...((theme || {}).commonStyles || {}).buttonVariant1,
  },
  loginHeader: {
    ...((theme || {}).commonStyles || {}).textVariant2,
    fontFamily: "Figtree",
  },
  loginHeaderSecondaryText: {
    ...((theme || {}).commonStyles || {}).textVariant2,
    fontSize: theme.font.size.xSmall,
    color: theme.palette.primary.main,
  },
}));
const Login = ({ getUserLoginToken }) => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const classes = useStyles();
  const handleChange = (name, value) => {
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Typography variant="h5" gutterBottom className={classes.loginHeader}>
            LOGIN
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.loginHeaderSecondaryText}
          >
            * This is only for internal usage!. Thank you for visiting this
            page.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          label="User Name"
          name="userName"
          value={userDetails.userName}
          onChange={(e) => handleChange("userName", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          required
          label="Password"
          name="password"
          value={userDetails.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"center"}>
          <Button
            variant="contained"
            className={classes.buttonView}
            onClick={() => {
              getUserLoginToken({ ...userDetails });
            }}
          >
            LOG IN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
