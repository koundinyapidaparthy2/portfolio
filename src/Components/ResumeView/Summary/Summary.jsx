import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const useStyles = makeStyles((theme) => ({
  summary: {
    marginTop: "20px",
  },
}));

const Summary = ({ loading, education }) => {
  const classes = useStyles();

  return (
    <Grid item xs={11} className={classes.summary}>
      <Grid container spacing={3}>
        <Education loading={loading} education={education} />
        <Experience />
        <Skills />
        <Projects />
      </Grid>
    </Grid>
  );
};

export default Summary;
