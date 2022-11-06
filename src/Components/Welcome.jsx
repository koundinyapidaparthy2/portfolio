import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../LOGO1.mp4";
import ProjectsImg from "../Projects.png";
import AboutImg from "../About.png";
import { Tooltip } from "@material-ui/core";
import HandWave from "../HandWave.gif";
import PersonalImage from "../PersonalImage.jpeg";
import WeatherBigImage from "../WeatherBig.png";
import TeslaBig from "../TeslaBig.png";
import SpotifyBig from "../SpotifyBig.png";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import htmlImage from "../Html.webp";
import cssImage from "../Css.webp";
import reactImage from "../React.png";
import "../index.css";
import Interest from "../Interest.png";
import TravelImage from "../Travel.jpg";
import PhysicImage from "../Physic.png";
import Physic2Image from "../Physic2.png";
import FashionImage from "../Fashion.jpg";
import HawaMahal from "../HawaMahel.jpg";
import HawaMahalNight from "../HawaMahalNight.jpeg";
import LPUImage from "../LPU.png";
import ChaitanyaImage from "../Chaitanya.jpeg";
import Bhashyam from "../Bhashyam.png";
import NodeJsImage from "../NodeJs.png";
import ExpressJsImage from "../ExpressJs.png";
import GraphqlImage from "../Graphql.png";
import JavaImage from "../Java.png";
import SyscloudImage from "../Syscloud.png";
import HornBlowerImage from "../Hornblower.png";
const useStyles = makeStyles(() => {
  return {
    logo: {
      position: "fixed",
      margin: "10px 0px 0px 20px",
      "&::-webkit-media-controls": {
        display: "none !important",
      },
    },
    welcomeImage: {
      position: "absolute",
      width: "40px",
      height: "40px",
      marginTop: "30px",
    },
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
    tooltipClassForExperience: {
      backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      color: "white",
      fontSize: "12px",
      marginTop: "35px",
    },
    tooltipArrowClassForExperience: {
      color: "#4158D0",
    },
    tooltipArrowClass: {
      color: "white",
    },
    tooltipClassForLanguagesUsed: {
      background: "white",
      color: "black",
      fontSize: "12px",
    },
    scrollGridItem: {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-media-controls-panel": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
      "&::-webkit-media-controls-play-button": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
      "&::-webkit-media-controls-start-playback-button": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
    },
  };
});
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};
const projectsImages = [WeatherBigImage, TeslaBig, SpotifyBig];
const ProjectsInformation = [
  {
    headerLabel: "Weather App",
    about:
      "I created a weather application that takes your current location and displays the 24/7 forecast accordingly.",
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 1,
    },
    link: "https://koundinyapidaparthy.github.io/weatherapp/",
  },
  {
    headerLabel: "Tesla Clone",
    about:
      "The current Tesla official has been cloned. By cloning this, I was able to grasp the underlying CSS concepts. ",
    labels: ["React", "Css3", "Html5"],
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 2,
    },
    link: "https://koundinyapidaparthy.github.io/tesla-clone/",
  },
  {
    headerLabel: "Spotify Clone",
    about:
      "In my early days of web development, I created a Spotify clone to understand the basics of web development concepts",
    labels: ["React", "Css3", "Html5"],
    languagesUsed: {
      labels: ["React", "Css3", "Html5"],
      images: [reactImage, cssImage, htmlImage],
      key: 3,
    },
  },
];

const skillsImages = [
  reactImage,
  NodeJsImage,
  ExpressJsImage,
  JavaImage,
  GraphqlImage,
];
const languagesNames = ["ReactJs", "NodeJs", "ExpressJs", "Java", "Graphql"];
const Welcome = () => {
  const hbJoinDate = new Date("08/08/2022");
  const today = new Date();
  const daysDifference = (today - hbJoinDate) / (1000 * 3600 * 24);
  const [mrWhoseTheBossBarHeight, setMrWhoseTheBossBarHeight] =
    React.useState();
  const mainDivRef = React.useRef(null);
  const [mainAnimations, setMainAnimations] = React.useState({
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
  const [interestStateData, setInterestStateData] = React.useState({
    fashion: {
      opacity: undefined,
      rotate: undefined,
    },
    photography: {
      opacity: 1,
      rotate: undefined,
    },
    fitness: {
      opacity: undefined,
      rotate: undefined,
    },
  });
  const [showCurrentHeader, setShowCurrentHeader] = React.useState(false);
  const [scrollChildElementNow, setScrollChildElementNow] =
    React.useState(false);
  const classes = useStyles();

  function onScrollShowHeader(value) {
    if (showCurrentHeader !== value) {
      setShowCurrentHeader(value);
      setTimeout(() => setShowCurrentHeader(false), 8000);
    }
  }

  const eventInnerWidth = window.innerWidth;

  function scrollEvent(event) {
    const defaultValue = 495;
    const eventValue = event.currentTarget.scrollTop;
    console.log({ eventValue });
    const eventInnerWidth = window.innerWidth;

    if (eventValue < 300 && showCurrentHeader) {
      onScrollShowHeader(false);
    }

    if (eventValue >= 895 && eventValue <= 905) {
      onScrollShowHeader("About Krishna");
    }
    if (eventValue >= 1845 && eventValue <= 1855) {
      onScrollShowHeader("Welcome to my projects");
    }
    if (eventValue >= 2695 && eventValue <= 2705) {
      onScrollShowHeader("My Interests");
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
    if (eventValue >= 2350 && eventInnerWidth > 700) {
      setScrollChildElementNow(true);
    } else if (
      eventValue >= 2450 &&
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
  function interestDivScroll(event) {
    const eventValue = event.currentTarget.scrollTop;
    const multiplyWIthNumber = eventInnerWidth < 760 ? 2 : 1;
    if (eventValue <= 300 * multiplyWIthNumber) {
      const opacity = 1 - eventValue / (300 * multiplyWIthNumber);
      const rotateValue = eventValue / (10 * multiplyWIthNumber);
      setInterestStateData((prev) => ({
        ...prev,
        fashion: {
          opacity: opacity || 0.00001,
          rotate: rotateValue,
        },

        photography: {
          opacity: 1,
        },
      }));
    }
    if (
      eventValue >= 320 * multiplyWIthNumber &&
      eventValue <= 600 * multiplyWIthNumber
    ) {
      const opacity = 1 - eventValue / (600 * multiplyWIthNumber);
      const rotateValue =
        (eventValue - 300 * multiplyWIthNumber) / (10 * multiplyWIthNumber);
      setInterestStateData((prev) => ({
        ...prev,
        photography: {
          opacity: opacity || 0.00001,
          rotate: rotateValue,
        },
      }));
    }
    if (eventValue >= 610 * multiplyWIthNumber) {
      const opacity = eventValue / (690 * multiplyWIthNumber);
      setInterestStateData((prev) => ({
        ...prev,
        fitness: {
          opacity: opacity || 1,
        },
      }));
    }
  }

  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = wrap(0, projectsImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

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
  }

  return (
    <Grid container wrap={"nowrap"}>
      <Grid item>
        <video
          width="100"
          height="100"
          controls
          autoPlay
          loop
          className={classes.logo}
          muted
        >
          <source src={Logo} type="video/mp4" />
        </video>
        {showCurrentHeader && (
          <div
            style={{
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              height: "3vh",
              marginTop: "-50px",
            }}
            className={showCurrentHeader ? "moveTheDivFromTop" : ""}
          >
            <div
              style={{
                width: "3px",
                height: "10px",
                borderRadius: "10px",
                marginTop: "-20px",
                backgroundImage:
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              }}
            />
            <div
              style={{
                width: "max-content",
                height: "2.5vh",
                background: "white",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                position: "fixed",
                marginTop: "10px",
                backgroundImage:
                  "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                padding: "0px 10px",
              }}
              className={showCurrentHeader ? "rotatebleCard" : ""}
            >
              {showCurrentHeader}
            </div>
          </div>
        )}
      </Grid>
      <Grid
        item
        style={{
          width: "100px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
        className={"sideBarSmallClass"}
      >
        <Grid
          container
          style={{
            height: "50vh",
            width: "40px",
            overflow: "hidden",
            marginLeft: "30px",
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
              onClick={() => moveToTheElement(3)}
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
              onClick={() => moveToTheElement(4)}
            />
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        item
        onScroll={scrollEvent}
        style={{
          height: window.innerHeight,
          overflowY: "scroll",
          flexGrow: 1,
          scrollBehavior: "smooth",
          overflowX: "hidden",
        }}
        ref={mainDivRef}
        className={classes.scrollGridItem}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            position: "relative",
            opacity: mainAnimations.homeVisibility.opacity,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              opacity: 0,
              width: "100%",
            }}
            className={"introMessage"}
          >
            <div
              style={{
                width: "50%",
              }}
              className={"holaWrapper"}
            >
              <div
                style={{
                  fontSize: "3.5vw",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  color: "transparent",
                  backgroundClip: "text",
                  fontWeight: "bold",
                }}
                className={"hola"}
              >
                Hola Amigo's{" "}
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  marginTop: "10px",
                }}
                className={"holaContent"}
              >
                <div>This is krishna. Welcome to my valise..</div>
                <div
                  style={{
                    width: "75%",
                    height: "5vw",
                    backgroundImage:
                      "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                    position: "absolute",
                  }}
                  className={"secondaryTextSliderMove"}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "15vw",
              height: "15vw",
              borderRadius: "50%",
              backgroundImage: `url(${PersonalImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              marginLeft: "10vw",
              opacity: 0,
              boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
              zIndex: 1,
            }}
            className={"introImage"}
          ></div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            opacity: mainAnimations.aboutVisibility.opacity,
          }}
        >
          <div
            id={"About"}
            style={{
              width: "95%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "30px 0px",
              height: "max-content",
            }}
          >
            <div
              style={{
                width: "35%",
                height: "max-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className={"aboutCssFromCssFile"}
            >
              <div
                id={"About Header"}
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "max-content",
                }}
              >
                About
              </div>
              <div
                id={"About Data"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={HandWave}
                  width={"20px"}
                  height={"20px"}
                  style={{ marginLeft: "5px" }}
                />
                <div style={{ textAlign: "center" }}>
                  I'm a developer. my ideology is to build a web or android app
                  with best accessibility and user interface with the help of
                  basic funda.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id={"Certifications"}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            opacity: mainAnimations.aboutFewMoreVisibility.opacity,
          }}
        >
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              className={"certificationSmallScreen"}
            >
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "max-content",
                }}
              >
                Certifications
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px 0px 4px 0px",
                        borderTop: "3px solid #4eb1d9",
                        borderLeft: "3px solid #4eb1d9",
                        width: "20px",
                        height: "3px",
                        margin: "0px 10px 0px 140px",
                      }}
                    />
                    <a
                      href={
                        "https://www.coursera.org/account/accomplishments/verify/79C3N5UNWWPX"
                      }
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 20px",
                          borderRadius: "20px",
                          backgroundColor: "#0093E9",
                          backgroundImage:
                            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                          fontSize: "16px",
                          fontWeight: "bold",

                          marginRight: "10px",
                          display: "flex",
                          alignItems: "center",
                          width: "80px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>NodeJs</div>
                        <img
                          src={NodeJsImage}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "15px",
                            borderRadius: "50%",
                          }}
                          className={"moveImageAbout"}
                        />
                      </div>
                    </a>
                  </div>
                  <div
                    style={{
                      width: "3px",
                      height: "15px",
                      background: "white",
                      margin: "0px 0px 10px 140px",
                      borderRadius: "8px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px 0px 4px 0px",
                        borderTop: "3px solid #4eb1d9",
                        borderLeft: "3px solid #4eb1d9",
                        width: "20px",
                        height: "3px",
                        margin: "0px 10px 0px 140px",
                      }}
                    />
                    <a
                      href={
                        "https://www.coursera.org/account/accomplishments/verify/79C3N5UNWWPX"
                      }
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 20px",
                          borderRadius: "20px",
                          backgroundColor: "#0093E9",
                          backgroundImage:
                            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                          fontSize: "16px",
                          fontWeight: "bold",

                          marginRight: "10px",
                          display: "flex",
                          alignItems: "center",
                          width: "80px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Express</div>
                        <img
                          src={ExpressJsImage}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "15px",
                            borderRadius: "30px",
                          }}
                          className={"moveImageAbout"}
                        />
                      </div>
                    </a>
                  </div>
                  <div
                    style={{
                      width: "3px",
                      height: "15px",
                      background: "white",
                      margin: "0px 0px 10px 140px",
                      borderRadius: "8px",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "0px 0px 4px 0px",
                        borderTop: "3px solid #4eb1d9",
                        borderLeft: "3px solid #4eb1d9",
                        width: "20px",
                        height: "3px",
                        margin: "0px 10px 0px 60px",
                      }}
                    />
                    <div
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#0093E9",
                        backgroundImage:
                          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                        fontSize: "16px",
                        fontWeight: "bold",
                        width: "max-content",
                      }}
                    >
                      BackEnd
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "3px",
                    height: "15px",
                    background: "white",
                    margin: "0px 0px 10px 60px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: "#0093E9",
                    backgroundImage:
                      "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                    fontSize: "16px",
                    fontWeight: "bold",
                    width: "max-content",
                  }}
                >
                  Application
                </div>
                <div
                  style={{
                    width: "3px",
                    height: "15px",
                    background: "white",
                    margin: "10px 0px 0px 60px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 0px 0px 0px",
                      borderLeft: "3px solid #4eb1d9",
                      borderBottom: "3px solid #4eb1d9",
                      width: "20px",
                      height: "3px",
                      margin: "0px 10px 0px 60px",
                    }}
                  />
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: "#0093E9",
                      backgroundImage:
                        "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "max-content",
                    }}
                  >
                    FrontEnd
                  </div>
                </div>
                <div
                  style={{
                    width: "3px",
                    height: "15px",
                    background: "white",
                    margin: "10px 0px 0px 140px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 0px 0px 0px",
                      borderLeft: "3px solid #4eb1d9",
                      borderBottom: "3px solid #4eb1d9",
                      width: "20px",
                      height: "3px",
                      margin: "0px 10px 0px 140px",
                    }}
                  />
                  <a
                    href={
                      "https://certificates.simplicdn.net/share/2080597.pdf"
                    }
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#0093E9",
                        backgroundImage:
                          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        width: "80px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>React</div>
                      <img
                        src={reactImage}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "10px",
                        }}
                        className={"rotateImage"}
                      />
                    </div>
                  </a>
                </div>
                <div
                  style={{
                    width: "3px",
                    height: "15px",
                    background: "white",
                    margin: "10px 0px 0px 140px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 0px 0px 0px",
                      borderLeft: "3px solid #4eb1d9",
                      borderBottom: "3px solid #4eb1d9",
                      width: "20px",
                      height: "3px",
                      margin: "0px 10px 0px 140px",
                    }}
                  />
                  <a
                    href={
                      "https://www.coursera.org/account/accomplishments/verify/CSCY5X5HH7QF"
                    }
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#0093E9",
                        backgroundImage:
                          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        width: "80px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Css3</div>
                      <img
                        src={cssImage}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "20px",
                        }}
                        className={"moveImageAbout"}
                      />
                    </div>
                  </a>
                </div>
                <div
                  style={{
                    width: "3px",
                    height: "15px",
                    background: "white",
                    margin: "10px 0px 0px 140px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 0px 0px 0px",
                      borderLeft: "3px solid #4eb1d9",
                      borderBottom: "3px solid #4eb1d9",
                      width: "20px",
                      height: "3px",
                      margin: "0px 10px 0px 140px",
                    }}
                  />
                  <a
                    href={
                      "https://www.coursera.org/account/accomplishments/verify/S4ZF56FLMLST"
                    }
                    target={"_blank"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#0093E9",
                        backgroundImage:
                          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
                        fontSize: "16px",
                        fontWeight: "bold",

                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center",
                        width: "80px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Html5</div>
                      <img
                        src={htmlImage}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "15px",
                        }}
                        className={"moveImageAbout"}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              className={"educationSmallScreen"}
            >
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "max-content",
                }}
              >
                Education
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Tooltip
                    arrow
                    interactive
                    placement={"left"}
                    title={
                      <div>
                        Graduated from{" "}
                        <a
                          href={"https://conferences.lpu.in/ncmp/about-lpu.php"}
                          target={"_blank"}
                          style={{
                            textDecoration: "none",
                            color: "#4158D0",
                          }}
                        >
                          Lovely Professional University
                        </a>{" "}
                        with a 7.63 CGPA.
                        <span
                          style={{
                            color: "#353535",
                            fontSize: "10px",
                            marginLeft: "10px",
                          }}
                        >
                          2018 - 2022
                        </span>
                      </div>
                    }
                    classes={{
                      tooltip: classes.tooltipClass,
                      arrow: classes.tooltipArrowClass,
                    }}
                  >
                    <img
                      src={LPUImage}
                      style={{
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </Tooltip>

                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div> Graduation </div>
                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    7.63 CGPA{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Tooltip
                    arrow
                    interactive
                    placement={"left"}
                    title={
                      <div>
                        Completed Intermediate education from{" "}
                        <a
                          href={"https://srichaitanya.net/about-us"}
                          target={"_blank"}
                          style={{
                            textDecoration: "none",
                            color: "#4158D0",
                          }}
                        >
                          SriChaitanya
                        </a>{" "}
                        with a 8.5 CGPA.
                        <span
                          style={{
                            color: "#353535",
                            fontSize: "10px",
                            marginLeft: "10px",
                          }}
                        >
                          2016 - 2018
                        </span>
                      </div>
                    }
                    classes={{
                      tooltip: classes.tooltipClass,
                      arrow: classes.tooltipArrowClass,
                    }}
                  >
                    <img
                      src={ChaitanyaImage}
                      style={{
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </Tooltip>

                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div>Intermediate</div>
                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    8.5 CGPA{" "}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Tooltip
                    arrow
                    interactive
                    placement={"left"}
                    title={
                      <div>
                        Completed Schooling from{" "}
                        <a
                          href={"https://www.bhashyam.in/Home/AboutUs"}
                          target={"_blank"}
                          style={{
                            textDecoration: "none",
                            color: "#0093E9",
                          }}
                        >
                          Bhashyam
                        </a>{" "}
                        with a 9.8 CGPA.
                        <span
                          style={{
                            color: "#353535",
                            fontSize: "10px",
                            marginLeft: "10px",
                          }}
                        >
                          2015 - 2016
                        </span>
                      </div>
                    }
                    classes={{
                      tooltip: classes.tooltipClass,
                      arrow: classes.tooltipArrowClass,
                    }}
                  >
                    <img
                      src={Bhashyam}
                      style={{
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </Tooltip>

                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div>Schooling</div>
                  <div
                    style={{
                      width: "10px",
                      height: "3px",
                      border: "0px",
                      background: "white",
                      borderRadius: "6px",
                      margin: "0px 10px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    9.8 CGPA{" "}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
              className={"experienceSmallScreen"}
            >
              <div
                id={"Experience Header"}
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "max-content",
                }}
              >
                Experience
              </div>
              <div
                id={"Experience div"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "20px",
                  color: "black",
                  padding: "0px 30px",
                }}
              >
                <div
                  id={"cardForPreviousWork"}
                  style={{
                    width: "90%",
                    height: "8vh",
                    background: "white",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      height: "4vh",
                    }}
                  >
                    <img
                      src={SyscloudImage}
                      style={{
                        width: "4vh",
                        height: "4vh",
                        borderRadius: "8px",
                      }}
                    />
                    <div style={{ fontWeight: "bold" }}>
                      Syscloud Technologies PVT LTD.
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      // height:"6vh",
                      fontSize: "10px",
                    }}
                  >
                    ⌛ May 2021 - Jul 2022. 1Year 3 months
                    <br />
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "20px",
                  width: "3px",
                  background: "white",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
              <div
                id={"Experience div"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                  color: "black",
                }}
              >
                <div
                  id={"cardForPreviousWork"}
                  style={{
                    width: "90%",
                    height: "8vh",
                    background: "white",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      height: "8vh",
                    }}
                  >
                    <img
                      src={HornBlowerImage}
                      style={{
                        width: "4vh",
                        height: "4vh",
                        borderRadius: "8px",
                      }}
                    />
                    <div style={{ fontWeight: "bold" }}>Hornblower Group.</div>
                    <Tooltip
                      title={
                        <div>
                          Joined {parseInt(Math.round(daysDifference))} Days
                          Before
                        </div>
                      }
                      arrow
                      interactive
                      placement={"bottom"}
                      classes={{
                        tooltip: classes.tooltipClassForExperience,
                        arrow: classes.tooltipArrowClassForExperience,
                      }}
                      open={
                        eventInnerWidth < 800 &&
                        mainAnimations.projects.opacity === 0
                          ? true
                          : undefined
                      }
                    >
                      <div className={"rotateImage"}>⌛</div>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id={"Skills"}
            style={{
              width: "100%",
              height: "10vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10vh",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "50vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // justifyContent:"center"
              }}
            >
              <div
                id={"Skills Header"}
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: "#4158D0",
                  backgroundImage:
                    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  width: "max-content",
                }}
              >
                Skills
              </div>
              <div
                id={"Skills Data"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {skillsImages.map((eachImage, index) => {
                  return (
                    <Tooltip
                      arrow
                      interactive
                      title={
                        <div
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {languagesNames[index]}
                        </div>
                      }
                      classes={{
                        tooltip: classes.tooltipClassForLanguagesUsed,
                        arrow: classes.tooltipArrowClass,
                      }}
                      placement={"bottom"}
                    >
                      <img
                        key={index}
                        src={eachImage}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          margin: "0px 10px",
                        }}
                        className={
                          index === 0 || index === 4 ? "rotateImage" : ""
                        }
                      />
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            opacity: mainAnimations.projects.opacity,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowBackIcon
              onClick={() => paginate(-1)}
              style={{
                width: "20px",
                height: "20px",
                padding: "10px",
                background: "white",
                color: "black",
                borderRadius: "50%",
                marginRight: "-50px",
                cursor: "pointer",
                zIndex: 1,
              }}
            />
            <AnimatePresence initial={false} custom={direction}>
              <div
                style={{
                  width: "80vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  key={ProjectsInformation[imageIndex].headerLabel}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  style={{
                    marginBottom: "20px",
                    fontSize: "40px",
                    fontWeight: "bold",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "100px",
                      background: "black",
                      position: "absolute",
                      transform: "rotate(45deg)",
                      marginTop: "-25px",
                      marginLeft: "-50px",
                    }}
                    className={"imageHeaderBar"}
                  ></div>
                  {ProjectsInformation[imageIndex].headerLabel}
                </motion.div>
                <a
                  href={ProjectsInformation[imageIndex].link}
                  target={"_blank"}
                  className={"scaleTheElement"}
                >
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    style={{
                      width: "50vw",
                      height: "25vw",
                      backgroundImage: `url(${projectsImages[imageIndex]})`,
                      backgroundSize: "cover",
                      borderRadius: "8px",
                      boxShadow: "rgb(126 120 120 / 40%) 7px 7px 29px 0px",
                    }}
                  />
                </a>

                <motion.p
                  key={ProjectsInformation[imageIndex].about}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  style={{
                    margin: "20px 0px 20px 0px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {ProjectsInformation[imageIndex].about}
                </motion.p>
                <motion.p
                  key={ProjectsInformation[imageIndex].languagesUsed.key}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  style={{
                    marginBottom: "20px",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "5px 5px",
                      background: "white",
                      borderRadius: "4px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        background: "white",
                        transform: "rotate(45deg)",
                        position: "absolute",
                        marginLeft: "90px",
                        marginTop: "2.5px",

                        borderBottomLeftRadius: "50%",
                      }}
                    ></div>
                    Languages Used
                  </div>

                  {ProjectsInformation[imageIndex].languagesUsed.images.map(
                    (eachImage, index) => {
                      return (
                        <div
                          style={{
                            marginLeft: index === 0 ? "20px" : "",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {index ? (
                            <div
                              style={{
                                width: "10px",
                                height: "3px",
                                border: "0px",
                                background: "white",
                                borderRadius: "6px",
                                margin: "0px 6px",
                              }}
                            ></div>
                          ) : null}

                          <Tooltip
                            title={
                              ProjectsInformation[imageIndex].languagesUsed
                                .labels[index]
                            }
                            arrow
                            placement={"bottom"}
                            classes={{
                              tooltip: classes.tooltipClassForLanguagesUsed,
                              arrow: classes.tooltipArrowClass,
                            }}
                          >
                            <motion.img
                              src={eachImage}
                              style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                              }}
                            />
                          </Tooltip>
                        </div>
                      );
                    }
                  )}
                </motion.p>
              </div>
            </AnimatePresence>
            <ArrowForwardIcon
              onClick={() => paginate(1)}
              style={{
                width: "20px",
                height: "20px",
                padding: "10px",
                background: "white",
                color: "black",
                borderRadius: "50%",
                marginLeft: "-50px",
                cursor: "pointer",
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            overflow: "scroll",
            position: "relative",
            zIndex: 1,
          }}
          className={classes.scrollGridItem}
        >
          <div
            style={{
              height: "95vh",
              width: "95%",
              overflowY: scrollChildElementNow ? "scroll" : "hidden",
              overflowX: "hidden",
              position: "relative",
              scrollBehavior: "smooth",
            }}
            onScroll={interestDivScroll}
            className={classes.scrollGridItem}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",

                width: "100%",
                position: "relative",
                opacity: interestStateData.fashion.opacity || 1,
                ...(eventInnerWidth < 760
                  ? {
                      flexDirection: "column",
                    }
                  : {
                      height: "60vh",
                    }),
              }}
            >
              <div
                id={"fashionCard1"}
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${FashionImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...(eventInnerWidth > 760
                    ? {
                        position: "absolute",
                        marginLeft: "10vw",
                        transform: `rotate(-${
                          interestStateData.fashion.rotate || 0
                        }deg)`,
                        width: "15vw",
                        height: "40.5vh",
                      }
                    : {
                        width: "50vw",
                        height: "25vh",
                      }),
                }}
                className={"fashionCard1"}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  id={"card"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",

                    ...(eventInnerWidth < 760
                      ? {
                          width: "75%",
                          height: "35.5vh",
                        }
                      : {
                          width: "50%",
                          marginLeft: "4vw",
                          height: "40.5vh",
                        }),
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginTop: "20px",
                      ...(eventInnerWidth < 760 ? {} : { marginTop: "15vh" }),
                    }}
                  >
                    Fashion
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    I always try to present myself in a more fashionable way. so
                    that I feel more confident.
                    <br />I was planning to participate in fashion shows in the
                    upcoming years 🤩.
                  </p>
                  <p></p>
                </div>
              </div>

              <div
                id={"fashionCard2"}
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${TravelImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...(eventInnerWidth > 760
                    ? {
                        position: "absolute",
                        marginLeft: "70vw",
                        transform: `rotate(${
                          interestStateData.fashion.rotate || 0
                        }deg)`,
                        width: "15vw",
                        height: "40.5vh",
                      }
                    : {
                        width: "50vw",
                        height: "25vh",
                      }),
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                position: "relative",
                opacity: interestStateData.photography.opacity || 1,
                ...(eventInnerWidth < 760
                  ? {
                      flexDirection: "column",
                    }
                  : {
                      height: "60vh",
                    }),
              }}
            >
              <div
                id={"card"}
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${HawaMahal})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  ...(eventInnerWidth > 760
                    ? {
                        position: "absolute",
                        marginLeft: "10vw",
                        transform: `rotate(-${
                          interestStateData.photography.rotate || 0
                        }deg)`,
                        width: "15vw",
                        height: "40.5vh",
                      }
                    : {
                        width: "50vw",
                        height: "25vh",
                        marginTop: "10vh",
                      }),
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  id={"card"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",

                    ...(eventInnerWidth < 760
                      ? {
                          width: "75%",
                          height: "30.5vh",
                        }
                      : {
                          width: "50%",
                          marginLeft: "4vw",
                          height: "40.5vh",
                        }),
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginTop: "20px",
                    }}
                  >
                    Photography
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    I like mobile photography a lot.
                    <br />
                    It makes my mind more color full and creative 👀.
                  </p>
                  <p></p>
                </div>
              </div>

              <div
                id={"card"}
                style={{
                  width: "15vw",
                  height: "40.5vh",
                  borderRadius: "8px",
                  backgroundImage: `url(${HawaMahalNight})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...(eventInnerWidth > 760
                    ? {
                        position: "absolute",
                        marginLeft: "70vw",
                        transform: `rotate(${
                          interestStateData.photography.rotate || 0
                        }deg)`,
                        width: "15vw",
                        height: "40.5vh",
                      }
                    : {
                        width: "50vw",
                        height: "25vh",
                        marginBottom: "10vh",
                      }),
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                position: "relative",
                opacity: interestStateData.fitness.opacity || 1,
                ...(eventInnerWidth < 760
                  ? {
                      flexDirection: "column",
                    }
                  : {
                      height: "50vh",
                    }),
              }}
            >
              <div
                id={"card"}
                style={{
                  width: "15vw",
                  height: "200px",
                  borderRadius: "8px",
                  backgroundImage: `url(${PhysicImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...(eventInnerWidth > 760
                    ? {
                        marginLeft: "10vw",
                        position: "absolute",
                      }
                    : {
                        width: "50vw",
                        marginBottom: "10vh",
                      }),
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <div
                  id={"card"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    ...(eventInnerWidth < 760
                      ? {
                          width: "75%",
                          height: "20.5vh",
                        }
                      : {
                          width: "50%",
                          marginLeft: "4vw",
                          height: "40.5vh",
                        }),
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",

                      ...(eventInnerWidth < 760 ? {} : { marginTop: "15vh" }),
                    }}
                  >
                    Fitness
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    My yoga, workout, and diet help me control depression and
                    anxiety.
                    <br />
                    Workout makes me active through out the day.
                  </p>
                  <p></p>
                </div>
              </div>

              <div
                id={"card"}
                style={{
                  width: "15vw",
                  height: "200px",
                  borderRadius: "8px",
                  backgroundImage: `url(${Physic2Image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  ...(eventInnerWidth > 760
                    ? {
                        position: "absolute",
                        marginLeft: "70vw",
                      }
                    : {
                        width: "50vw",
                        marginBottom: "10vh",
                      }),
                }}
              />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Welcome;
