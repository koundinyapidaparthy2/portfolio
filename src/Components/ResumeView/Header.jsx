import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  buttonView: {
    ...(theme || {} || {}).commonStyles.buttonVariant1,
  },
  navigateHeader: {
    margin: "10px 0px 20px 0px",
  },
}));

const HeaderSection = ({ onAestheticView }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const goToAestheticView = () => {
    navigate("/");
  };
  const goToEditPdfView = () => {
    navigate("/editPdf");
  };

  return (
    <Grid item xs={12} className={classes.navigateHeader}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
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
            onClick={goToEditPdfView}
          >
            EDIT PDF VIEW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
