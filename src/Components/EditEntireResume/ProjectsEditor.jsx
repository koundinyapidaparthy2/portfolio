import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Divider from "@mui/material/Divider";
import { withStyles } from "@mui/styles";
import styles from "./styles";

const ProjectsEditor = ({ classes, projects, onSave }) => {
  const [isAddProjectEnabled, setIsAddProjectEnabled] = useState(false);

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

  const handleAddProject = () => {
    const updatedProjects = [
      {
        name: "",
        Stack: "",
        date: "",
        points: [],
        website: { url: "", text: "" },
        github: [],
      },
      ...projects,
    ];
    onSave(updatedProjects);
  };
  const handleRemoveProjects = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    onSave(updatedProjects);
  };

  useEffect(() => {
    const allFieldsFilled = projects.every(
      (currProject) =>
        currProject.name.trim() !== "" &&
        currProject.Stack.trim() !== "" &&
        currProject.date.trim() !== "" &&
        currProject.points.every((point) => point.trim() !== "") &&
        currProject.website.url.trim() !== "" &&
        currProject.website.text.trim() !== "" &&
        currProject.github.every(
          (github) => github.text.trim() !== "" && github.url.trim() !== ""
        )
    );
    setIsAddProjectEnabled(allFieldsFilled);
  }, [projects]);
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
              Projects
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.buttonView}
              onClick={handleAddProject}
              disabled={!isAddProjectEnabled}
            >
              <AddCircleOutlineIcon
                color="primary"
                className={classes.addButtonStyles}
              />
              Add New Project
            </Button>
          </Grid>
        </Grid>
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
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        className={classes.iteratorTitle}
                      >
                        Project {index + 1}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.buttonView}
                        onClick={() => handleRemoveProjects(index)}
                      >
                        <RemoveCircleOutlineIcon
                          color="primary"
                          className={classes.removeButtonStyles}
                        />
                      </Button>
                    </Grid>
                  </Grid>
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
                                          <RemoveCircleOutlineIcon
                                            color="primary"
                                            className={
                                              classes.removeButtonStyles
                                            }
                                          />
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
                                    <AddCircleOutlineIcon
                                      color="primary"
                                      className={classes.addButtonStyles}
                                    />
                                    Add Github Links
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
              <Divider className={classes.divider} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProjectsEditor);
