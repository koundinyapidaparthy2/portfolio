import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Fallback from "../../Fallback";
const useStyles = makeStyles((theme) => ({
  summary: {
    marginTop: "20px",
  },
}));

const Summary = ({ loading, education, experience, skills, projects }) => {
  console.log({experience})
  const classes = useStyles();
  if (loading) {
    return <Fallback />;
  }
  return (
    <Grid item xs={11} className={classes.summary}>
      <Grid container spacing={3}>
        <Education education={education} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Projects projects={projects} />
      </Grid>
    </Grid>
  );
};

export default Summary;
