import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const useStyles = makeStyles((theme) => ({
  editResumeHeader: {
    ...(theme || {} || {}).commonStyles.textVariant2,
  },
  buttonView: {
    ...(theme || {} || {}).commonStyles.buttonVariant1,
  },
}));

const allSkills = [
  "Html",
  "CSS",
  "JavaScript",
  "Typescript",
  "ReactJs",
  "Redux",
  "NextJs",
  "React Native",
  "Python",
  "NodeJs",
  "GraphQl",
  "RestApi",
  "Aws(DynamoDb, S3)",
  "MongoDB",
  "GCP(GCS, Bigtable)",
  "Firebase Storage",
  "GitHub Actions",
  "GCP Cloud Build",
  "Aws(IAM, EC2, Lambda, Api Gateways, CDK, S3)",
  "GCP(SAM, Compute Engine, GCF, Api gateway, GCS)",
];

const SkillsEditor = ({ skills, onSave }) => {
  const classes = useStyles();

  const handleSkillChange = (index, newSkills) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], Skills: newSkills };
    onSave(updatedSkills);
  };

  const handleTitleChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], title: value };
    onSave(updatedSkills);
  };

  const handleAddCategory = () => {
    const updatedSkills = [...skills, { title: "", Skills: [] }];
    onSave(updatedSkills);
  };

  const handleRemoveCategory = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onSave(updatedSkills);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.editResumeHeader}
        >
          Skills
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Skills Category {index + 1}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={12} lg={2}>
                      <TextField
                        fullWidth
                        label="Title"
                        value={skill.title}
                        onChange={(e) =>
                          handleTitleChange(index, e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10}>
                      <Autocomplete
                        multiple
                        freeSolo
                        options={allSkills}
                        value={skill.Skills}
                        onChange={(event, newValue) =>
                          handleSkillChange(index, newValue)
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Skills"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Button
                        className={classes.buttonView}
                        onClick={() => handleRemoveCategory(index)}
                      >
                        <RemoveCircleOutlineIcon color="primary" />
                        Remove Category
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  className={classes.buttonView}
                  onClick={handleAddCategory}
                >
                  <AddCircleOutlineIcon color="primary" />
                  Add New Category
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsEditor;
