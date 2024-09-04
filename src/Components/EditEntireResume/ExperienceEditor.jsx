import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Divider from "@mui/material/Divider";
const ExperienceEditor = ({ classes, experience, onSave }) => {
  const [isAddExperienceEnabled, setIsAddExperienceEnabled] = useState(false);

  const handleChange = (index, name, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = { ...updatedExperience[index], [name]: value };
    onSave(updatedExperience);
  };
  const handlePointsChange = (index, pointIndex, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index].points[pointIndex] = value;
    onSave(updatedExperience);
  };
  const handleAddPoint = (index) => {
    const updatedExperience = [...experience];
    updatedExperience[index].points.push("");
    onSave(updatedExperience);
  };

  const handleRemovePoint = (index, pointIndex) => {
    const updatedExperience = [...experience];
    updatedExperience[index].points.splice(pointIndex, 1);
    onSave(updatedExperience);
  };

  const handleAddExperience = () => {
    const updatedExperience = [
      {
        companyName: "",
        role: "",
        location: "",
        date: "",
        points: [],
      },
      ...experience,
    ];
    onSave(updatedExperience);
  };
  useEffect(() => {
    const allFieldsFilled = experience.every(
      (currExperiences) =>
        currExperiences.companyName.trim() !== "" &&
        currExperiences.role.trim() !== "" &&
        currExperiences.location.trim() !== "" &&
        currExperiences.date.trim() !== "" &&
        currExperiences.points.every((point) => point.trim() !== "")
    );
    setIsAddExperienceEnabled(allFieldsFilled);
  }, [experience]);
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Grid
          container
          spacing={1}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.editResumeHeader}
            >
              Experience
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.buttonView}
              disabled={!isAddExperienceEnabled}
              onClick={handleAddExperience}
            >
              <AddCircleOutlineIcon
                color="primary"
                className={classes.addButtonStyles}
              />
              Add New Experience
            </Button>
          </Grid>
        </Grid>
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
                        fullWidth
                        label="Company Name"
                        value={exp.companyName}
                        onChange={(e) =>
                          handleChange(index, "companyName", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Role"
                        value={exp.role}
                        onChange={(e) =>
                          handleChange(index, "role", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Location"
                        value={exp.location}
                        onChange={(e) =>
                          handleChange(index, "location", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Date"
                        value={exp.date}
                        onChange={(e) =>
                          handleChange(index, "date", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">Points</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          {exp.points.map((point, pointIndex) => (
                            <Grid
                              container
                              spacing={1}
                              key={pointIndex}
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Grid item xs={10} sm={10} md={11} lg={11}>
                                <TextareaAutosize
                                  minRows={2}
                                  placeholder={`Point ${pointIndex + 1}`}
                                  value={point}
                                  onChange={(e) =>
                                    handlePointsChange(
                                      index,
                                      pointIndex,
                                      e.target.value
                                    )
                                  }
                                  className={classes.pointsAutoSize}
                                />
                              </Grid>
                              <Grid item>
                                <Button
                                  className={classes.buttonView}
                                  onClick={() =>
                                    handleRemovePoint(index, pointIndex)
                                  }
                                >
                                  <RemoveCircleOutlineIcon
                                    color="primary"
                                    className={classes.removeButtonStyles}
                                  />
                                </Button>
                              </Grid>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container justifyContent="center">
                            <Grid item>
                              <Button
                                className={classes.buttonView}
                                onClick={() => handleAddPoint(index)}
                              >
                                <AddCircleOutlineIcon
                                  color="primary"
                                  className={classes.addButtonStyles}
                                />{" "}
                                Add Points
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ExperienceEditor);
