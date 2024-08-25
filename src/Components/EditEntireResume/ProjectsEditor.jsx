import React, { useState } from "react";
import TextField from "../ReusedComponents/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  editResumeHeader: {
    ...(theme || {} || {}).commonStyles.textVariant2,
  },
  buttonView: {
    ...(theme || {} || {}).commonStyles.buttonVariant1,
  },
}));
const ProjectsEditor = ({ projects, onSave }) => {
  const classes = useStyles();
  const handleChange = (index, name, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    onSave(updatedProjects);
  };

  const handlePointsChange = (index, pointIndex, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].points[pointIndex] = value;
    onSave(updatedProjects);
  };

  const handleAddPoint = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].points.push("");
    onSave(updatedProjects);
  };

  const handleRemovePoint = (index, pointIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[index].points.splice(pointIndex, 1);
    onSave(updatedProjects);
  };

  const handleWebsiteChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].website = {
      ...updatedProjects[index].website,
      [field]: value,
    };
    onSave(updatedProjects);
  };

  const handleGithubChange = (index, githubIndex, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].github[githubIndex] = {
      ...updatedProjects[index].github[githubIndex],
      [field]: value,
    };
    onSave(updatedProjects);
  };

  const handleAddGithub = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].github.push({ text: "", url: "" });
    onSave(updatedProjects);
  };

  const handleRemoveGithub = (index, githubIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[index].github.splice(githubIndex, 1);
    onSave(updatedProjects);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.editResumeHeader}
        >
          Projects
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Project {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        fullWidth
                        label="Name"
                        value={project.name}
                        onChange={(e) =>
                          handleChange(index, "name", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        fullWidth
                        label="Stack"
                        value={project.Stack}
                        onChange={(e) =>
                          handleChange(index, "Stack", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <TextField
                        fullWidth
                        label="Date"
                        value={project.date}
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
                          {project.points.map((point, pointIndex) => (
                            <Grid
                              container
                              spacing={1}
                              key={pointIndex}
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Grid item xs={11}>
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
                                  style={{ width: "100%", padding: "8px" }}
                                />
                              </Grid>
                              <Grid item>
                                <Button
                                  className={classes.buttonView}
                                  onClick={() =>
                                    handleRemovePoint(index, pointIndex)
                                  }
                                >
                                  <RemoveCircleOutlineIcon color="primary" />
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
                                <AddCircleOutlineIcon color="primary" />
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">Website</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                          >
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="URL"
                                value={project.website.url}
                                onChange={(e) =>
                                  handleWebsiteChange(
                                    index,
                                    "url",
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                fullWidth
                                label="Text"
                                value={project.website.text}
                                onChange={(e) =>
                                  handleWebsiteChange(
                                    index,
                                    "text",
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid item xs={12}>
                          <Typography variant="subtitle2">GitHub</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                          >
                            <Grid item xs={12}>
                              <Grid
                                container
                                spacing={2}
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                {project.github.map((github, githubIndex) => (
                                  <Grid item xs={12} key={githubIndex}>
                                    <Grid
                                      container
                                      spacing={2}
                                      justifyContent="space-between"
                                      alignItems="center"
                                    >
                                      <Grid item xs={12} sm={5}>
                                        <TextField
                                          fullWidth
                                          label={`GitHub Text ${
                                            githubIndex + 1
                                          }`}
                                          value={github.text}
                                          onChange={(e) =>
                                            handleGithubChange(
                                              index,
                                              githubIndex,
                                              "text",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={6}>
                                        <TextField
                                          fullWidth
                                          label={`GitHub URL ${
                                            githubIndex + 1
                                          }`}
                                          value={github.url}
                                          onChange={(e) =>
                                            handleGithubChange(
                                              index,
                                              githubIndex,
                                              "url",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </Grid>
                                      <Grid item xs={12} sm={1}>
                                        <Button
                                          className={classes.buttonView}
                                          onClick={() =>
                                            handleRemoveGithub(
                                              index,
                                              githubIndex
                                            )
                                          }
                                        >
                                          <RemoveCircleOutlineIcon color="primary" />
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                ))}
                              </Grid>
                            </Grid>
                            <Grid item xs={12}>
                              <Grid container justifyContent="center">
                                <Grid item>
                                  <Button
                                    className={classes.buttonView}
                                    onClick={() => handleAddGithub(index)}
                                  >
                                    <AddCircleOutlineIcon color="primary" />
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
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

export default ProjectsEditor;
