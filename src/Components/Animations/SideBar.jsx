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
      border: "1px solid #ffffff38",
      borderRadius: "4px",
      boxShadow: "#ffffff38 0px 0px 24px",
    },
    tooltipClass: {
      background: "white",
      color: "black",
      fontSize: "12px",
      marginLeft: "20px",
    },
    tooltipArrowClass: {
      color: "white",
    },
  };
});
const SideBar = ({ mrWhoseTheBossBarHeight, moveToTheElement }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      style={{
        width: "80px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
      }}
      className={"sideBarSmallClass"}
    >
      <Grid
        container
        style={{
          height: "50vh",
          width: "40px",
          overflow: "hidden",
          marginLeft: "20px",
          display: "flex",
          justifyContent: "center",
        }}
        className={classes.mrWhoseTheBossBar}
      >
        <Grid
          item
          style={{
            height: "500vh",
            width: "100%",
            background: "white",
            marginTop: mrWhoseTheBossBarHeight || "-495vh",
            boxShadow: "rgb(255 255 255 / 94%) 0px 0px 24px",
          }}
        ></Grid>
        <Tooltip
          title={
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>Welcome</span>
              <img
                src={HandWave}
                width={"20px"}
                height={"20px"}
                style={{ marginLeft: "5px" }}
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
            style={{
              marginTop: "1vh",
              position: "absolute",
              cursor: "pointer",
              fontSize: "",
            }}
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
            style={{
              marginTop: "17vh",
              position: "absolute",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
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
            style={{
              marginTop: "31.5vh",
              position: "absolute",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
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
            style={{
              marginTop: "47vh",
              position: "absolute",
              cursor: "pointer",
              width: "20px",
              height: "20px",
            }}
            loading="lazy"
            onClick={() => moveToTheElement(4)}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default SideBar;
