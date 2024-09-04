import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styles from "./styles";

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

const SkillsEditor = ({ classes, skills, onSave }) => {
  const [isAddCategoryEnabled, setIsAddCategoryEnabled] = useState(false);

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
    const newIndex = skills.length;
    const updatedSkills = [...skills, { title: "", Skills: [] }];
    onSave(updatedSkills);
  };

  const handleRemoveCategory = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    onSave(updatedSkills);
  };

  useEffect(() => {
    const allFieldsFilled = skills.every(
      (skill) => skill.title.trim() !== "" && skill.Skills.length > 0
    );
    setIsAddCategoryEnabled(allFieldsFilled);
  }, [skills]);
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
              Skills
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.buttonView}
              disabled={!isAddCategoryEnabled}
              onClick={handleAddCategory}
            >
              <AddCircleOutlineIcon
                color="primary"
                className={classes.addButtonStyles}
              />
              Add New Category
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {skills.map((skill, index) => (
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
                      <Typography variant="subtitle1">
                        Skills Category {index + 1}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.buttonView}
                        onClick={() => handleRemoveCategory(index)}
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
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                      <TextField
                        fullWidth
                        label="Title"
                        value={skill.title}
                        onChange={(e) =>
                          handleTitleChange(index, e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} lg={10}>
                      <Autocomplete
                        multiple
                        freeSolo
                        options={allSkills}
                        value={skill.Skills}
                        onChange={(event, newValue) =>
                          handleSkillChange(index, newValue)
                        }
                        renderInput={(params) => {
                          return (
                            <TextField
                              {...params}
                              label="Skills"
                              color="primary"
                            />
                          );
                        }}
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

export default withStyles(styles)(SkillsEditor);
