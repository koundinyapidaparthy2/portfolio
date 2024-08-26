import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "../ReusedComponents/TextField";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  editResumeHeader: {
    ...((theme || {}).commonStyles || {}).textVariant2,
  },
}));
const ExperienceEditor = ({ experience, onSave }) => {
  const classes = useStyles();
  const handleChange = (index, name, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    onSave(updatedExperience);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.editResumeHeader}
        >
          Experience
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {experience.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Experience {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Company Name"
                        value={exp.companyName}
                        onChange={(e) =>
                          handleChange(index, "companyName", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Role"
                        value={exp.role}
                        onChange={(e) =>
                          handleChange(index, "role", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Location"
                        value={exp.location}
                        onChange={(e) =>
                          handleChange(index, "location", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Date"
                        value={exp.date}
                        onChange={(e) =>
                          handleChange(index, "date", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextareaAutosize
                        minRows={2}
                        placeholder="Points"
                        value={exp.points.join(", ")}
                        onChange={(e) =>
                          handleChange(
                            index,
                            "points",
                            e.target.value.split(",").map((p) => p.trim())
                          )
                        }
                        style={{ width: "100%", padding: "8px" }}
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

export default ExperienceEditor;
