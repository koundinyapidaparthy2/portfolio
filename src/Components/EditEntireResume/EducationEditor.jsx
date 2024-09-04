import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import styles from "./styles";

const EducationEditor = ({ classes, education, onSave }) => {
  const handleChange = (index, name, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [name]: value };
    onSave(updatedEducation);
  };
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.editResumeHeader}
        >
          Education
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={2}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    className={classes.iteratorTitle}
                  >
                    Education {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="University"
                        value={edu.university}
                        onChange={(e) =>
                          handleChange(index, "university", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Degree"
                        value={edu.studied}
                        onChange={(e) =>
                          handleChange(index, "studied", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="GPA"
                        value={edu.gpa}
                        onChange={(e) =>
                          handleChange(index, "gpa", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Graduation Date"
                        value={edu.graduationDate}
                        onChange={(e) =>
                          handleChange(index, "graduationDate", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Location"
                        value={edu.location}
                        onChange={(e) =>
                          handleChange(index, "location", e.target.value)
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(EducationEditor);
