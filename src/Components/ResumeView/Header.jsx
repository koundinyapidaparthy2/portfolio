import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonView: {
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
    fontWeight: 600,
    padding: "4px 15px !important",
    fontSize: "10px",
    boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
    cursor: "pointer",
    "&.Mui-disabled": {
      background: `${theme.palette.background.paper} !important`,
      color: theme.palette.primary.main,
      opacity: 0.8,
      cursor: "none",
    },
  },
  navigateHeader: {
    margin: "10px 0px 20px 0px",
  },
}));

const HeaderSection = ({ onAestheticView }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.navigateHeader}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button variant="contained" className={classes.buttonView} disabled>
            PDF VIEW
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.buttonView}
            onClick={onAestheticView}
          >
            AESTHETIC VIEW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
