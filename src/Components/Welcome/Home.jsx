import React from "react";
import PersonalImage from "../../Images/PersonalImage.jpg";
import "../../index.css";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  homeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    opacity: 0,
    width: "100%",
    animation: "$opacityIntroMessage 1s linear 1s forwards",
  },
  homeMainGridContainer: {
    width: "50%",
    [theme.breakpoints.down("c1")]: {
      width: "75% !important",
    },
  },
  homeMainGridTextMessage: {
    fontSize: "3.5vw",
    backgroundImage: theme.palette.background.default,
    color: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "background-clip": "text",
    [theme.breakpoints.down("c3")]: {
      fontSize: "5vw !important",
    },
    [theme.breakpoints.down("c1")]: {
      fontSize: "9vw !important",
    },
  },
  homeMainGridContent: {
    fontSize: "2vw",
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: "10px",
    [theme.breakpoints.down("c3")]: {
      fontSize: "2.5vw !important",
    },
    [theme.breakpoints.down("c1")]: {
      fontSize: "3.5vw !important",
    },
  },
  homeMainGridSecondaryText: {
    width: "75%",
    height: "5vw",
    backgroundImage: theme.palette.background.paper,
    position: "absolute",
    animation: `$secondaryTextSliderMoveFrame 1s linear 1s forwards`,
    [theme.breakpoints.down("c3")]: {
      animation: `$secondaryTextSliderMoveFrame2 1s linear 1s forwards !important`,
    },
    [theme.breakpoints.down("c1")]: {
      animation: `$secondaryTextSliderMoveFrame3 1s linear 1s forwards !important`,
    },
  },
  homeMainIntroImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    marginLeft: "10vw",
    opacity: 0,
    boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
    zIndex: 1,
    width: "15vw",
    height: "15vw",
    borderRadius: "50%",
    backgroundImage: `url(${PersonalImage})`,
    animation: `$moveIntroImage 1s linear 1s forwards`,
    [theme.breakpoints.down("c3")]: {
      animation: `$moveIntroImage2 1s linear 1s forwards !important`,
    },
    [theme.breakpoints.down("c1")]: {
      animation: `$moveIntroImage3 1s linear 1s forwards !important`,
    },
  },
  "@keyframes opacityIntroMessage": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  "@keyframes moveIntroImage": {
    from: {
      marginLeft: "10vw",
      opacity: 0,
    },
    to: {
      marginLeft: "60vw",
      opacity: 1,
    },
  },
  "@keyframes moveIntroImage2": {
    from: {
      marginLeft: "10vw",
      opacity: 0,
    },
    to: {
      marginLeft: "70vw",
      opacity: 1,
    },
  },
  "@keyframes moveIntroImage3": {
    from: {
      marginLeft: "10vw",
      opacity: 0,
      width: "20vw",
      height: "20vw",
    },
    to: {
      marginLeft: "75vw",
      opacity: 1,
      width: "20vw",
      height: "20vw",
    },
  },
  "@keyframes moveIntroImage3": {
    from: {
      marginLeft: "10vw",
      opacity: 0,
      width: "20vw",
      height: "20vw",
    },
    to: {
      marginLeft: "75vw",
      opacity: 1,
      width: "20vw",
      height: "20vw",
    },
  },
  "@keyframes secondaryTextSliderMoveFrame": {
    from: {
      width: "75%",
      marginLeft: "0vw",
    },
    to: {
      width: "1%",
      marginLeft: "34vw",
      height: "2.5vw",
      opacity: 1,
    },
  },
  "@keyframes secondaryTextSliderMoveFrame2": {
    from: {
      width: "75%",
      marginLeft: "0vw",
    },
    to: {
      width: "1%",
      marginLeft: "42.5vw",
      height: "2.5vw",
      opacity: 1,
    },
  },
  "@keyframes secondaryTextSliderMoveFrame3": {
    from: {
      width: "75%",
      marginLeft: "0vw",
    },
    to: {
      width: "1%",
      marginLeft: "59.5vw",
      height: "3.5vw",
      opacity: 1,
    },
  },
}));
const Home = ({ mainAnimations }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: `calc(${window.innerHeight}px - 100px)`,
        opacity: mainAnimations.homeVisibility.opacity,
      }}
      className={classes.homeWrapper}
    >
      <div className={classes.homeContainer}>
        <div className={classes.homeMainGridContainer}>
          <div className={classes.homeMainGridTextMessage}>Hola Amigo's </div>
          <div className={classes.homeMainGridContent}>
            <div>This is krishna. Welcome to my valise..</div>
            <div className={classes.homeMainGridSecondaryText} />
          </div>
        </div>
      </div>

      <div className={classes.homeMainIntroImage}></div>
    </div>
  );
};

export default Home;
