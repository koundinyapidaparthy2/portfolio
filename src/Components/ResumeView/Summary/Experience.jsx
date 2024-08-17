import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Fallback from "../../Fallback";
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

const ExperienceSection = ({ loading, experience }) => {
  const classes = useStyles();
  if (loading) {
    return <Fallback />;
  }
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.titleHeader}>
            Experience
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            {experience.map(({ companyName, location, role, date, points }) => (
              <Grid item xs={12} key={companyName}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <strong>{companyName}</strong> | {location} | {role}
                      </Grid>
                      <Grid item>{date}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={11}>
                    <Grid container spacing={2}>
                      {points.map((eachPoint, index) => (
                        <Grid item xs={12} key={index}>
                          <strong>•</strong> {eachPoint}
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
