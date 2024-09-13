import React, { lazy, Suspense } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import SideBar from "../Animations/SideBar";
import ScrollIndicator from "../Animations/ScrollIndicator";
import "../../index.css";
import MessageMeHere from "../MessageMeHere/MessageMeHere";
import Fallback from "../Fallback";
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Interests = lazy(() => import("./Interests"));

const trackerMapper = {
  1: "Home",
  2: "About",
  4: "Interest",
  5: "Skills",
  6: "Projects",
};

const useStyles = makeStyles((theme) => {
  return {
    welcomeWrapper: {
      width: "100%",
    },
    mainGrid: {
      padding: `0 ${theme.spacing(4)}px`,
      position: "relative",
      overflow: "hidden",
      maxHeight: `calc(${window.innerHeight}px)`,
    },
    headerGrid: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100px",
      zIndex: 2,
      transition: "transform 0.3s ease",
      padding: "0px 20px",
      background: theme.palette.secondary.main,
    },
    scrollbarGrid: {
      overflowY: "scroll",
      scrollBehavior: "smooth",
      overflowX: "hidden",
      position: "relative",
      height: `100vh`,
      marginLeft: "80px",
      [theme.breakpoints.down("md")]: {
        marginLeft: "0px",
      },
    },
  };
});
const Welcome = ({ confettiAction, trackAnalytics }) => {
  const classes = useStyles();
  const mainDivRef = React.useRef(null);
  const [mrWhoseTheBossBarHeight, setMrWhoseTheBossBarHeight] =
    React.useState();
  const [scrollChildElementNow, setScrollChildElementNow] =
    React.useState(false);

  const [mainAnimations, setMainAnimations] = React.useState({
    videoVisibility: {
      opacity: 1,
    },
    aboutVisibility: {
      opacity: 0,
    },
    aboutFewMoreVisibility: {
      opacity: 0,
    },
    projects: {
      opacity: 0,
    },
  });

  function scrollEvent(event) {
    const defaultValue = 495;
    const eventValue = event.currentTarget.scrollTop;
    const eventInnerWidth = window.innerWidth;
    if (eventInnerWidth < 680 && eventValue > 300) {
      setMainAnimations((prev) => ({
        ...prev,
        videoVisibility: {
          opacity: 0,
        },
      }));
    }
    if (eventInnerWidth < 680 && eventValue < 300) {
      setMainAnimations((prev) => ({
        ...prev,
        videoVisibility: {
          opacity: 1,
        },
      }));
    }

    const output = `${eventValue / 52 - defaultValue}vh`;
    setMrWhoseTheBossBarHeight(output);
    const windowInnerHeight = window.innerHeight;
    if (eventValue >= 2000 && eventInnerWidth > 700) {
      setScrollChildElementNow(true);
    } else if (
      eventValue >= 2050 &&
      eventInnerWidth < 700 &&
      eventInnerWidth > 500
    ) {
      setScrollChildElementNow(true);
    } else if (
      eventValue >=
        2600 +
          (windowInnerHeight <= 800
            ? windowInnerHeight - 658
            : windowInnerHeight / 1.5) &&
      eventInnerWidth < 500
    ) {
      setScrollChildElementNow(true);
    } else {
      setScrollChildElementNow(false);
    }
  }
  function triggerActions(value) {
    confettiAction({});
    trackAnalytics({
      viewed: trackerMapper[value],
    });
  }
  function moveToTheElement(value) {
    if (value === 1) {
      mainDivRef.current.scrollTo(0, 0);
    }
    if (value === 2) {
      mainDivRef.current.scrollTo(0, 750);
    }
    if (value === 3) {
      mainDivRef.current.scrollTo(0, 1550);
    }
    if (value === 4) {
      mainDivRef.current.scrollTo(0, mainDivRef.current.scrollHeight);
    }

    if (value === 5) {
      mainDivRef.current.scrollTo(0, 1250);
    }
    if (value === 6) {
      mainDivRef.current.scrollTo(0, 2000);
    }
    triggerActions(value);
  }
  React.useEffect(() => {
    confettiAction({});
    return () => {};
  }, []);
  return (
    <div className={classes.welcomeWrapper}>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} className={`${classes.headerGrid}`}>
          <Grid item xs={12}>
            <Header
              mainAnimations={mainAnimations}
              moveToTheElement={moveToTheElement}
            />
          </Grid>
        </Grid>
        <SideBar
          moveToTheElement={moveToTheElement}
          mrWhoseTheBossBarHeight={mrWhoseTheBossBarHeight}
        />
        <MessageMeHere />
        <Grid
          item
          xs={12}
          className={classes.scrollbarGrid}
          ref={mainDivRef}
          onScroll={scrollEvent}
        >
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <Suspense fallback={<Fallback />}>
            <section id="skills">
              <Skills />
            </section>
          </Suspense>
          <Suspense fallback={<Fallback />}>
            <section id="projects">
              <Projects />
            </section>
          </Suspense>
          <Suspense fallback={<Fallback />}>
            <section id="interests">
              <Interests scrollChildElementNow={scrollChildElementNow} />
            </section>
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
