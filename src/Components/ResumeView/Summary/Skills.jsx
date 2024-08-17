import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  titleHeader: {
    fontSize: "13px",
    marginRight: "4px",
  },
  skillsContent: {
    fontSize: "12px",
    marginRight: "4px",
  },
  divider: {
    backgroundColor: "#fff",
    opacity: 0.7,
  },
}));

const SkillsSection = ({ skills }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.titleHeader}>
            SKILLS
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={11}>
          <Grid container alignItems="center" spacing={1}>
            {skills.map(({ title, Skills }) => (
              <Grid item xs={12} key={title}>
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <strong>{title}</strong>:
                  </Grid>
                  {Skills.map((value, index) => (
                    <Grid item key={index}>
                      {index === Skills.length - 1 ? `${value}.` : `${value},`}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkillsSection;
