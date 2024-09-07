import React, { useState, lazy, Suspense, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fallback from "../Fallback";
import EditResumeFallback from "./EditResumeFallback";
import { withStyles } from "@mui/styles";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { isEqual } from "lodash";
import Skeleton from "@mui/material/Skeleton";

import ContactEditor from "./PersonalDetailsEditor";
// import EducationEditor from "./EducationEditor";
// import ExperienceEditor from "./ExperienceEditor";
// import SkillsEditor from "./SkillsEditor";
// import ProjectsEditor from "./ProjectsEditor";
const EducationEditor = lazy(() => import("./EducationEditor"));
const ExperienceEditor = lazy(() => import("./ExperienceEditor"));
const SkillsEditor = lazy(() => import("./SkillsEditor"));
const ProjectsEditor = lazy(() => import("./ProjectsEditor"));
const accordionPanels = [
  {
    key: "contact",
    title: "Contact Editor",
    component: ContactEditor,
    prop: "personalDetails",
  },
  {
    key: "education",
    title: "Education Editor",
    component: EducationEditor,
    prop: "education",
  },
  {
    key: "experience",
    title: "Experience Editor",
    component: ExperienceEditor,
    prop: "experience",
  },
  {
    key: "skills",
    title: "Skills Editor",
    component: SkillsEditor,
    prop: "skills",
  },
  {
    key: "projects",
    title: "Projects Editor",
    component: ProjectsEditor,
    prop: "projects",
  },
];

const EditEntireResume = ({
  classes,
  initialValues,
  loading,
  updateEntireResume,
}) => {
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);
  const [expanded, setExpanded] = useState("contact");
  const [resumeState, setResumeState] = useState({
    personalDetails: initialValues.contactDetails,
    education: initialValues.education,
    experience: initialValues.experience,
    skills: initialValues.skills,
    projects: initialValues.projects,
  });
  const handleStateChange = (field, value) => {
    setResumeState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const submit = () => {
    updateEntireResume({
      updatedResumeDetails: {
        ...resumeState,
        personalDetails: undefined,
        ...resumeState.personalDetails,
      },
    });
  };

  const goToAestheticView = () => {
    navigate("/");
  };
  const goToPdfView = () => {
    navigate("/pdf");
  };
  useEffect(() => {
    setIsRendered(true);
  }, []);
  if (loading || !isRendered) {
    return <EditResumeFallback />;
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
          {accordionPanels.map(({ key, title, component: Component, prop }) => (
            <Grid item xs={12} key={key}>
              <Accordion
                expanded={expanded === key}
                onChange={handleChange(key)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  classes={{ root: classes.accodionHeader }}
                >
                  <Typography variant="subtitle2">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Suspense fallback={<Fallback />}>
                    <Component
                      {...{
                        [prop]: resumeState[prop],
                        onSave: (value) => handleStateChange(prop, value),
                      }}
                    />
                  </Suspense>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
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
                <Button className={classes.submit} onClick={submit}>
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
