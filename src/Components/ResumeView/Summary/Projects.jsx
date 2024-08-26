import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  titleHeader: {
    fontSize: "13px",
    marginRight: "4px",
  },
  divider: {
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  hyperLink: {
    textDecoration: "none",
  },
}));

const Projects = ({ projects, loading }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.titleHeader}>
            PROJECTS
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={11}>
          <Grid container spacing={2}>
            {projects.map(({ name, Stack, date, points, website }) => (
              <Grid item xs={12} key={name}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Grid container spacing={1} alignItems="center">
                          <Grid item>
                            <strong>{name}</strong>
                          </Grid>
                          <Grid item>
                            (
                            <Link
                              variant="subtitle2"
                              href={website.url}
                              target="_blank"
                              className={classes.hyperLink}
                            >
                              {website.text}
                            </Link>
                            )
                          </Grid>
                        </Grid>
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

export default Projects;
