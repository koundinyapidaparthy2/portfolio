import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  titleHeader: {
    backgroundImage: theme.palette.background.paper,
    color: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  divider: {
    backgroundColor: "#fff",
    opacity: 0.7,
  },
}));

const EducationSection = ({ education }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.titleHeader}>
            Education
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            {education.map(
              ({ university, studied, gpa, graduationDate, location }) => (
                <Grid item xs={12} key={university}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="space-between"
                      >
                        <Grid item>{university}</Grid>
                        <Grid item>{location}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="space-between"
                      >
                        <Grid item>
                          {studied} | GPA {gpa}
                        </Grid>
                        <Grid item>{graduationDate}</Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EducationSection;
