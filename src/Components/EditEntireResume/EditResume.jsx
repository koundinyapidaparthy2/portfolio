import React, { useState, lazy, Suspense } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fallback from "../Fallback";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ContactEditor = lazy(() => import("./PersonalDetailsEditor"));
const EducationEditor = lazy(() => import("./EducationEditor"));
const ExperienceEditor = lazy(() => import("./ExperienceEditor"));
const SkillsEditor = lazy(() => import("./SkillsEditor"));
const ProjectsEditor = lazy(() => import("./ProjectsEditor"));

const EditEntireResume = ({ classes, initialValues, loading }) => {
  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState(
    initialValues.contactDetails
  );
  const [education, setEducation] = useState(initialValues.education);
  const [experience, setExperience] = useState(initialValues.experience);
  const [skills, setSkills] = useState(initialValues.skills);
  const [projects, setProjects] = useState(initialValues.projects);
  const [expanded, setExpanded] = useState("contact");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
            className={classes.editResumeHeaderWrapper}
          >
            <Grid item>
              <Typography
                variant="subtitle1"
                className={classes.editResumeHeader}
              >
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
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "contact"}
              onChange={handleChange("contact")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                  root: classes.accodionHeader,
                }}
              >
                <Typography variant="subtitle2">Contact Editor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Suspense fallback={<Fallback />}>
                  <ContactEditor
                    details={personalDetails}
                    onSave={setPersonalDetails}
                  />
                </Suspense>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Accordion
              expanded={expanded === "education"}
              onChange={handleChange("education")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                  root: classes.accodionHeader,
                }}
              >
                <Typography variant="subtitle2">Education Editor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Suspense fallback={<Fallback />}>
                  <EducationEditor
                    education={education}
                    onSave={setEducation}
                  />
                </Suspense>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Accordion
              expanded={expanded === "experience"}
              onChange={handleChange("experience")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                  root: classes.accodionHeader,
                }}
              >
                <Typography variant="subtitle2">Experience Editor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Suspense fallback={<Fallback />}>
                  <ExperienceEditor
                    experience={experience}
                    onSave={setExperience}
                  />
                </Suspense>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Accordion
              expanded={expanded === "skills"}
              onChange={handleChange("skills")}
            >
              <AccordionSummary
                classes={{
                  root: classes.accodionHeader,
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="subtitle2">Skills Editor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Suspense fallback={<Fallback />}>
                  <SkillsEditor skills={skills} onSave={setSkills} />
                </Suspense>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expanded={expanded === "projects"}
              onChange={handleChange("projects")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                  root: classes.accodionHeader,
                }}
              >
                <Typography variant="subtitle2">Projects Editor</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Suspense fallback={<Fallback />}>
                  <ProjectsEditor projects={projects} onSave={setProjects} />
                </Suspense>
              </AccordionDetails>
            </Accordion>
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
                <Typography
                  className={classes.editResumeHeader}
                  onClick={goToPdfView}
                >
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

export default withStyles(styles)(EditEntireResume);
