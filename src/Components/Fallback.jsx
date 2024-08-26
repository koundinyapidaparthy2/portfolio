import React from "react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

const Fallback = () => {
  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid item>
        <LinearProgress color="primary" />
      </Grid>
    </Grid>
  );
};

export default Fallback;
