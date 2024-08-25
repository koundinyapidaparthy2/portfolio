import React, { useState } from "react";
import TextField from "../ReusedComponents/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  editResumeHeader: {
    ...(theme || {} || {}).commonStyles.textVariant2,
  },
}));
const EducationEditor = ({ education, onSave }) => {
  const classes = useStyles();
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
                  <Typography variant="subtitle1">
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
                        label="University"
                        value={edu.university}
                        onChange={(e) =>
                          handleChange(index, "university", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Degree"
                        value={edu.studied}
                        onChange={(e) =>
                          handleChange(index, "studied", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="GPA"
                        value={edu.gpa}
                        onChange={(e) =>
                          handleChange(index, "gpa", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Graduation Date"
                        value={edu.graduationDate}
                        onChange={(e) =>
                          handleChange(index, "graduationDate", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
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

export default EducationEditor;
