import React from "react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

const Fallback = () => {
  return (
    <Grid container justifyContent="center" alignContent="center">
      <Grid item xs={12}>
        <LinearProgress color="secondary" />
      </Grid>
    </Grid>
  );
};

export default Fallback;
