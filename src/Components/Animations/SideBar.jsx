import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import ProjectsImg from "../../Images/Projects.png";
import AboutImg from "../../Images/About.png";
import Tooltip from "@mui/material/Tooltip";
import HandWave from "../../Images/HandWave.gif";
import Interest from "../../Images/Interest.png";

const useStyles = makeStyles((theme) => {
  return {
    mrWhoseTheBossBar: {
      height: "50vh",
      width: "40px",
      overflow: "hidden",
      marginLeft: "20px",
      display: "flex",
      justifyContent: "center",
      border: `1px solid ${theme.palette.sideBar.borderColor}`,
      borderRadius: "4px",
      boxShadow: `${theme.palette.sideBar.borderColor} 0px 0px 24px`,
    },
    mrWhoseTheBossBarHeight: {
      height: "500vh",
      width: "100%",
      background: "white",
      boxShadow: "rgb(255 255 255 / 94%) 0px 0px 24px",
    },
    tooltipClass: {
      background: theme.palette.primary.main,
      color: "black",
      fontSize: theme.font.size.small,
      marginLeft: "20px",
    },
    tooltipArrowClass: {
      color: theme.palette.primary.main,
    },
    sideBarCustomSmall: {
      width: "80px",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      position: "fixed",
      zIndex: 2,
      [theme.breakpoints.down("c3")]: {
        display: "none !important",
      },
    },
    prayIcon: {
      marginTop: "1vh",
      position: "absolute",
      cursor: "pointer",
    },
    aboutTooltip: {
      marginTop: "17vh",
      position: "absolute",
      cursor: "pointer",
      width: "20px",
      height: "20px",
    },
    projectTooltip: {
      marginTop: "31.5vh",
      position: "absolute",
      cursor: "pointer",
      width: "20px",
      height: "20px",
    },
    intersetTootlTip: {
      marginTop: "47vh",
      position: "absolute",
      cursor: "pointer",
      width: "20px",
      height: "20px",
    },
    welcomeTooltip: {
      display: "flex",
      alignItems: "center",
    },
    handWaveImageWelcome: {
      marginLeft: "5px",
    },
  };
});
const SideBar = ({ mrWhoseTheBossBarHeight, moveToTheElement }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.sideBarCustomSmall}>
      <Grid container className={classes.mrWhoseTheBossBar}>
        <Grid
          item
          style={{
            marginTop: mrWhoseTheBossBarHeight || "-495vh",
          }}
          className={classes.mrWhoseTheBossBarHeight}
        ></Grid>
        <Tooltip
          title={
            <div className={classes.welcomeTooltip}>
              <span>Welcome</span>
              <img
                src={HandWave}
                width={"20px"}
                height={"20px"}
                className={classes.handWaveImageWelcome}
                loading="lazy"
              />
            </div>
          }
          arrow
          placement={"left"}
          classes={{
            tooltip: classes.tooltipClass,
            arrow: classes.tooltipArrowClass,
          }}
        >
          <Grid
            item
            className={classes.prayIcon}
            onClick={() => moveToTheElement(1)}
          >
            🙏
          </Grid>
        </Tooltip>

        <Tooltip
          title={"About Krishna"}
          arrow
          placement={"left"}
          classes={{
            tooltip: classes.tooltipClass,
            arrow: classes.tooltipArrowClass,
          }}
        >
          <img
            src={AboutImg}
            className={classes.aboutTooltip}
            loading="lazy"
            onClick={() => moveToTheElement(2)}
          />
        </Tooltip>
        <Tooltip
          title={"Projects"}
          arrow
          placement={"left"}
          classes={{
            tooltip: classes.tooltipClass,
            arrow: classes.tooltipArrowClass,
          }}
        >
          <img
            src={ProjectsImg}
            className={classes.projectTooltip}
            loading="lazy"
            onClick={() => moveToTheElement(6)}
          />
        </Tooltip>
        <Tooltip
          title={"Interest"}
          arrow
          placement={"left"}
          classes={{
            tooltip: classes.tooltipClass,
            arrow: classes.tooltipArrowClass,
          }}
        >
          <img
            src={Interest}
            className={classes.intersetTootlTip}
            loading="lazy"
            onClick={() => moveToTheElement(4)}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default SideBar;
