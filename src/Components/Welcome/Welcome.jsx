import React, { lazy, Suspense } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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
      background: "#000",
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
    homeVisibility: {
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
    if (eventValue <= 100 && mainAnimations.homeVisibility.opacity !== 1) {
      setMainAnimations((prev) => ({
        ...prev,
        homeVisibility: {
          opacity: 1,
        },
      }));
    }
    if (eventValue >= 100 && eventValue <= 400) {
      const homeVisibility = (400 - eventValue) / 400;
      setMainAnimations((prev) => ({
        ...prev,
        homeVisibility: {
          opacity: homeVisibility,
        },
        aboutVisibility: {
          opacity: 0,
        },
      }));
    }
    if (eventValue >= 350 && eventValue <= 900) {
      const aboutVisibility = eventValue / 900;
      const aboutFewMoreVisibility = eventValue / 900;
      const showAboutData = eventValue >= 600;
      setMainAnimations((prev) => ({
        ...prev,
        aboutVisibility: {
          opacity: aboutVisibility,
        },
        aboutFewMoreVisibility: {
          opacity: showAboutData ? aboutFewMoreVisibility : 0,
        },
      }));
    }
    if (eventValue >= 900 && eventValue <= 1300) {
      setMainAnimations((prev) => ({
        ...prev,
        aboutFewMoreVisibility: {
          opacity: 1,
        },
      }));
    }
    if (eventInnerWidth < 953 && eventInnerWidth > 500) {
      if (eventValue >= 900 && eventValue <= 1700) {
        setMainAnimations((prev) => ({
          ...prev,
          aboutFewMoreVisibility: {
            opacity: 1,
          },
        }));
      }
      if (eventValue >= 1700 && eventValue <= 2100) {
        const aboutVisibility = (2100 - eventValue) / 2100;

        setMainAnimations((prev) => ({
          ...prev,
          aboutFewMoreVisibility: {
            opacity: aboutVisibility,
          },
          projects: {
            opacity: 0,
          },
        }));
      }
      if (eventValue >= 1500 && eventValue <= 2300) {
        const projectsOpacityData = eventValue / 2300;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
      if (eventValue >= 2500 && eventValue <= 3000) {
        const projectsOpacityData = (3000 - eventValue) / 3000;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
    } else if (eventInnerWidth < 500) {
      if (eventValue >= 900 && eventValue <= 1850) {
        setMainAnimations((prev) => ({
          ...prev,
          aboutFewMoreVisibility: {
            opacity: 1,
          },
        }));
      }
      if (eventValue >= 1850 && eventValue <= 2500) {
        const aboutVisibility = (2500 - eventValue) / 2500;

        setMainAnimations((prev) => ({
          ...prev,
          aboutFewMoreVisibility: {
            opacity: aboutVisibility,
          },
          projects: {
            opacity: 0,
          },
        }));
      }
      if (eventValue >= 1850 && eventValue <= 2700) {
        const projectsOpacityData = eventValue / 2700;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
      if (eventValue >= 3050 && eventValue <= 4000) {
        const projectsOpacityData = (4000 - eventValue) / 4000;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
    } else {
      if (eventValue >= 1300 && eventValue <= 1800) {
        const aboutVisibility = (1800 - eventValue) / 1800;

        setMainAnimations((prev) => ({
          ...prev,
          aboutFewMoreVisibility: {
            opacity: aboutVisibility,
          },
          projects: {
            opacity: 0,
          },
        }));
      }
      if (eventValue >= 1400 && eventValue <= 2000) {
        const projectsOpacityData = eventValue / 2000;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
      if (eventValue >= 2200 && eventValue <= 2800) {
        const projectsOpacityData = (2800 - eventValue) / 2800;
        setMainAnimations((prev) => ({
          ...prev,
          projects: {
            opacity: projectsOpacityData,
          },
        }));
      }
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
    <div style={{ width: "100%" }}>
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
        <ScrollIndicator
          hidden={mainAnimations.homeVisibility.opacity < 1}
          moveToTheElement={moveToTheElement}
        />
        <Grid
          item
          xs={12}
          className={classes.scrollbarGrid}
          ref={mainDivRef}
          onScroll={scrollEvent}
        >
          <section id="home">
            <Home mainAnimations={mainAnimations} />
          </section>
          <section id="about">
            <About mainAnimations={mainAnimations} />
          </section>
          <Suspense fallback={<Fallback />}>
            <section id="skills">
              <Skills mainAnimations={mainAnimations} />
            </section>
          </Suspense>
          <Suspense fallback={<Fallback />}>
            <section id="projects">
              <Projects mainAnimations={mainAnimations} />
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
