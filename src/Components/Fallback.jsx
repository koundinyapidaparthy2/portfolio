import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

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
