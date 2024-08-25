import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fallback from "../Fallback";
import EducationEditor from "./EducationEditor";
import ExperienceEditor from "./ExperienceEditor";
import SkillsEditor from "./SkillsEditor";
import ProjectsEditor from "./ProjectsEditor";
import ContactEditor from "./PersonalDetailsEditor";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  editResumeHeader: {
    ...(theme || {} || {}).commonStyles.textVariant2,
  },
  buttonView: {
    ...(theme || {} || {}).commonStyles.buttonVariant1,
  },
  submit: {
    ...(theme || {} || {}).commonStyles.buttonVariant1,
    fontSize: "14px",
  },
  formActions: {
    margin: "40px 0px 30px 0px",
  },
}));
const EditEntireResume = ({ initialValues, loading }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [personalDetails, setPersonalDetails] = useState(
    initialValues.contactDetails
  );
  const [education, setEducation] = useState(initialValues.education);
  const [experience, setExperience] = useState(initialValues.experience);
  const [skills, setSkills] = useState(initialValues.skills);
  const [projects, setProjects] = useState(initialValues.projects);
  const handleSubmit = () => {};

  const goToAestheticView = () => {
    navigate("/");
  };
  const goToPdfView = () => {
    navigate("/pdf");
  };
  if (loading) {
    return <Fallback />;
  }
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={11}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6" className={classes.editResumeHeader}>
                Edit Resume
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonView}
                    onClick={goToAestheticView}
                  >
                    AESTHETIC VIEW
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.buttonView}
                    onClick={goToPdfView}
                  >
                    PDF VIEW
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <ContactEditor
              details={personalDetails}
              onSave={setPersonalDetails}
            />
          </Grid>
          <Grid item xs={12}>
            <EducationEditor education={education} onSave={setEducation} />
          </Grid>
          <Grid item xs={12}>
            <ExperienceEditor experience={experience} onSave={setExperience} />
          </Grid>
          <Grid item xs={12}>
            <SkillsEditor skills={skills} onSave={setSkills} />
          </Grid>
          <Grid item xs={12}>
            <ProjectsEditor projects={projects} onSave={setProjects} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} className={classes.formActions}>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Typography className={classes.editResumeHeader}>
                  cancel
                </Typography>
              </Grid>
              <Grid item>
                <Button className={classes.submit} onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditEntireResume;
