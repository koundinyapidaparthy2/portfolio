import React from "react";
import NodeJsImage from "../../Images/NodeJs.png";
import NextImage from "../../Images/NextJs.png";
import ExpressJsImage from "../../Images/ExpressJs.png";
import htmlImage from "../../Images/Html.webp";
import cssImage from "../../Images/Css.webp";
import reactImage from "../../Images/React.png";
import Tooltip from "@mui/material/Tooltip";
import LPUImage from "../../Images/LPU.png";
import PaceImage from "../../Images/Pace.png";
import ChaitanyaImage from "../../Images/Chaitanya.jpeg";
import Bhashyam from "../../Images/Bhashyam.png";
import SyscloudImage from "../../Images/Syscloud.png";
import HornBlowerImage from "../../Images/Hornblower.png";
import { makeStyles, useTheme } from "@mui/styles";
import { skillsImages, languagesNames } from "../../data/index.js";
const useStyles = makeStyles((theme) => {
  return {
    tooltipClass: {
      background: "white",
      color: "black",
      fontSize: theme.font.size.small,
      marginLeft: "20px",
    },
    tooltipClassForExperience: {
      backgroundColor: theme.palette.third.main,
      backgroundImage: theme.palette.background.default,
      color: "white",
      fontSize: theme.font.size.small,
      marginTop: "35px",
    },
    tooltipArrowClassForExperience: {
      color: theme.palette.third.main,
    },
    tooltipArrowClass: {
      color: "white",
    },
    tooltipClassForLanguagesUsed: {
      background: "white",
      color: "black",
      fontSize: theme.font.size.small,
    },
  };
});
const Certifications = () => {
  const theme = useTheme();
  const hbJoinDate = new Date("11/15/2023");
  const today = new Date();
  const daysDifference = (today - hbJoinDate) / (1000 * 3600 * 24);
  const eventInnerWidth = window.innerWidth;

  const classes = useStyles();

  return (
    <div
      id={"Certifications"}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
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
              backgroundColor: theme.palette.third.main,
              backgroundImage: theme.palette.background.default,
              fontSize: theme.font.size.large,
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
                    borderTop: `3px solid ${theme.palette.background.downBlue}`,
                    borderLeft: `3px solid ${theme.palette.background.downBlue}`,
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
                  rel="noreferrer"
                >
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: theme.palette.background.markBlue,
                      backgroundImage: theme.palette.background.paper,
                      fontSize: theme.font.size.large,
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
                      loading="lazy"
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
                    borderTop: `3px solid ${theme.palette.background.downBlue}`,
                    borderLeft: `3px solid ${theme.palette.background.downBlue}`,
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
                  rel="noreferrer"
                >
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: theme.palette.background.markBlue,
                      backgroundImage: theme.palette.background.paper,
                      fontSize: theme.font.size.large,
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
                      loading="lazy"
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
                    borderTop: `3px solid ${theme.palette.background.downBlue}`,
                    borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                    width: "20px",
                    height: "3px",
                    margin: "0px 10px 0px 140px",
                  }}
                />
                <a
                  href={
                    "https://www.udemy.com/certificate/UC-77676625-2855-45bc-ab74-21bee4d969a2/"
                  }
                  target={"_blank"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  rel="noreferrer"
                >
                  <div
                    style={{
                      padding: "10px 20px",
                      borderRadius: "20px",
                      backgroundColor: theme.palette.background.markBlue,
                      backgroundImage: theme.palette.background.paper,
                      fontSize: theme.font.size.large,
                      fontWeight: "bold",

                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      width: "80px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>NextJs</div>
                    <img
                      src={NextImage}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "15px",
                        borderRadius: "30px",
                      }}
                      loading="lazy"
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
                    borderTop: `3px solid ${theme.palette.background.downBlue}`,
                    borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                    width: "20px",
                    height: "3px",
                    margin: "0px 10px 0px 60px",
                  }}
                />
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.background.markBlue,
                    backgroundImage: theme.palette.background.paper,
                    fontSize: theme.font.size.large,
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
                backgroundColor: theme.palette.background.markBlue,
                backgroundImage: theme.palette.background.paper,
                fontSize: theme.font.size.large,
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
                  borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                  borderBottom: `3px solid ${theme.palette.background.downBlue}`,
                  width: "20px",
                  height: "3px",
                  margin: "0px 10px 0px 60px",
                }}
              />
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "20px",
                  backgroundColor: theme.palette.background.markBlue,
                  backgroundImage: theme.palette.background.paper,
                  fontSize: theme.font.size.large,
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
                  borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                  borderBottom: `3px solid ${theme.palette.background.downBlue}`,
                  width: "20px",
                  height: "3px",
                  margin: "0px 10px 0px 140px",
                }}
              />
              <a
                href={
                  "https://www.udemy.com/certificate/UC-77676625-2855-45bc-ab74-21bee4d969a2/"
                }
                target={"_blank"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noreferrer"
              >
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.background.markBlue,
                    backgroundImage: theme.palette.background.paper,
                    fontSize: theme.font.size.large,
                    fontWeight: "bold",
                    marginRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    width: "80px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>NextJs</div>
                  <img
                    src={NextImage}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                    loading="lazy"
                    className="moveImageAbout"
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
                  borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                  borderBottom: `3px solid ${theme.palette.background.downBlue}`,
                  width: "20px",
                  height: "3px",
                  margin: "0px 10px 0px 140px",
                }}
              />
              <a
                href={"https://certificates.simplicdn.net/share/2080597.pdf"}
                target={"_blank"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                rel="noreferrer"
              >
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.background.markBlue,
                    backgroundImage: theme.palette.background.paper,
                    fontSize: theme.font.size.large,
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
                    loading="lazy"
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
                  borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                  borderBottom: `3px solid ${theme.palette.background.downBlue}`,
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
                rel="noreferrer"
              >
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.background.markBlue,
                    backgroundImage: theme.palette.background.paper,
                    fontSize: theme.font.size.large,
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
                    loading="lazy"
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
                  borderLeft: `3px solid ${theme.palette.background.downBlue}`,
                  borderBottom: `3px solid ${theme.palette.background.downBlue}`,
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
                rel="noreferrer"
              >
                <div
                  style={{
                    padding: "10px 20px",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.background.markBlue,
                    backgroundImage: theme.palette.background.paper,
                    fontSize: theme.font.size.large,
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
                    loading="lazy"
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
              backgroundColor: theme.palette.third.main,
              backgroundImage: theme.palette.background.default,
              fontSize: theme.font.size.large,
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
                placement={"left"}
                title={
                  <div>
                    Currently pursuing my masters in computer science from{" "}
                    <a
                      href={"https://www.pace.edu/"}
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.third.main,
                      }}
                      rel="noreferrer"
                    >
                      Pace University
                    </a>
                  </div>
                }
                classes={{
                  tooltip: classes.tooltipClass,
                  arrow: classes.tooltipArrowClass,
                }}
              >
                <img
                  src={PaceImage}
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                  loading="lazy"
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
              <div> Post Graduation </div>
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
                  fontSize: theme.font.size.small,
                }}
              >
                Going On
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
                placement={"left"}
                title={
                  <div>
                    Graduated from{" "}
                    <a
                      href={"https://conferences.lpu.in/ncmp/about-lpu.php"}
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.third.main,
                      }}
                      rel="noreferrer"
                    >
                      Lovely Professional University
                    </a>{" "}
                    with a 7.63 CGPA.
                    <span
                      style={{
                        color: theme.palette.skills.yearYouWorkedOn,
                        fontSize: theme.font.size.xSmall,
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
                  loading="lazy"
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
                  fontSize: theme.font.size.small,
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
                placement={"left"}
                title={
                  <div>
                    Completed Intermediate education from{" "}
                    <a
                      href={"https://srichaitanya.net/about-us"}
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.third.main,
                      }}
                      rel="noreferrer"
                    >
                      SriChaitanya
                    </a>{" "}
                    with a 93.8 %.
                    <span
                      style={{
                        color: theme.palette.skills.yearYouWorkedOn,
                        fontSize: theme.font.size.xSmall,
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
                  loading="lazy"
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
                  fontSize: theme.font.size.small,
                }}
              >
                93.8 %{" "}
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
                placement={"left"}
                title={
                  <div>
                    Completed Schooling from{" "}
                    <a
                      href={"https://www.bhashyam.in/Home/AboutUs"}
                      target={"_blank"}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.background.markBlue,
                      }}
                      rel="noreferrer"
                    >
                      Bhashyam
                    </a>{" "}
                    with a 9.2 CGPA.
                    <span
                      style={{
                        color: theme.palette.skills.yearYouWorkedOn,
                        fontSize: theme.font.size.xSmall,
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
                  loading="lazy"
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
                  fontSize: theme.font.size.small,
                }}
              >
                9.2 CGPA{" "}
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
              backgroundColor: theme.palette.third.main,
              backgroundImage: theme.palette.background.default,
              fontSize: theme.font.size.large,
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
                  loading="lazy"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    Syscloud Technologies LTD.
                  </div>
                  <div style={{ fontSize: "10px" }}>
                    Frontend Software Engineer Intern
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      // height:"6vh",
                      fontSize: theme.font.size.xSmall,
                    }}
                  >
                    ⌛ June 2020 - Jul 2022. 2Year 2months
                    <br />
                  </div>
                </div>
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
                  height: "4vh",
                }}
              >
                <img
                  src={HornBlowerImage}
                  style={{
                    width: "4vh",
                    height: "4vh",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    Hornblower Group.
                  </div>
                  <div style={{ fontSize: "10px" }}>
                    Associate Software Developer
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      // height:"6vh",
                      fontSize: theme.font.size.xSmall,
                    }}
                  >
                    ⌛ June 2022 - Jul 2023. 1 Year
                    <br />
                  </div>
                </div>
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
                  height: "4vh",
                }}
              >
                <img
                  src={HornBlowerImage}
                  style={{
                    width: "4vh",
                    height: "4vh",
                    borderRadius: "8px",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    Hornblower Group.
                  </div>
                  <div style={{ fontSize: "10px" }}>
                    Software Developer Intern
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      // height:"6vh",
                      fontSize: theme.font.size.xSmall,
                    }}
                  >
                    ⌛ May 2024 - Sep 2024. 4 Months
                    <br />
                  </div>
                </div>
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
          marginBottom: "10vh",
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
              backgroundColor: theme.palette.third.main,
              backgroundImage: theme.palette.background.default,
              fontSize: theme.font.size.large,
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
              flexWrap: "wrap",
            }}
          >
            {skillsImages.map((eachImage, index) => {
              return (
                <Tooltip
                  key={eachImage}
                  arrow
                  title={
                    <div
                      style={{
                        fontSize: theme.font.size.medium,
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
                  <div>
                    <img
                      key={index}
                      src={eachImage}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        margin: "0px 10px",
                        zIndex: 1,
                      }}
                      className={
                        index === 0 || index === skillsImages.length - 1
                          ? "rotateImage"
                          : ""
                      }
                      loading="lazy"
                    />
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

{
  /* <div
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
      height: "4vh",
    }}
  >
    <img
      style={{
        width: "4vh",
        height: "4vh",
        borderRadius: "8px",
      }}
      loading="lazy"
    />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold" }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          // height:"6vh",
          fontSize: theme.font.size.xSmall,
        }}
      >
        ⌛ Nov 2023 - Present.{" "}
        {parseInt(Math.round(daysDifference))} Days
        <br />
      </div>
    </div>
    <Tooltip
      title={
        <div>
          Joined {parseInt(Math.round(daysDifference))} Days Before
        </div>
      }
      arrow
      placement={"bottom"}
      classes={{
        tooltip: classes.tooltipClassForExperience,
        arrow: classes.tooltipArrowClassForExperience,
      }}
    >
      <div className={"rotateImage"}>⌛</div>
    </Tooltip>
  </div>
</div>
</div> */
}
