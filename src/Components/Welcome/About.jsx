import React from "react";
import HandWave from "../../Images/HandWave.gif";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  aboutContainer: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "30px 0px",
    height: "max-content",
  },
  aboutMainContainer: {
    width: "65%",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("c5")]: {
      width: "55% !important",
    },
  },
  aboutHeader: {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: theme.palette.third.main,
    backgroundImage: theme.palette.background.default,
    fontSize: theme.font.size.large,
    fontWeight: "bold",
    width: "max-content",
  },
  aboutImageDataContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  aboutData: {
    textAlign: "center",
  },
  handWaveImage: {
    marginLeft: "5px",
  },
}));
const About = ({ mainAnimations }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.aboutWrapper}
      style={{
        opacity: mainAnimations.aboutVisibility.opacity,
      }}
    >
      <div id={"About"} className={classes.aboutContainer}>
        <div className={classes.aboutMainContainer}>
          <div id={"About Header"} className={classes.aboutHeader}>
            About
          </div>
          <div id={"About Data"} className={classes.aboutImageDataContainer}>
            <img
              src={HandWave}
              width={"20px"}
              height={"20px"}
              className={classes.handWaveImage}
              loading="lazy"
            />
            <div className={classes.aboutData}>
              I'm a developer. my ideology is to build a web or android app with
              best accessibility and user interface with the help of basic
              funda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
