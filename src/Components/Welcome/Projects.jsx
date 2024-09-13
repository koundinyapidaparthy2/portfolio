import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";
import { projectsImages, ProjectsInformation } from "../../data/index.js";
import { wrap } from "popmotion";

const useStyles = makeStyles((theme) => {
  return {
    tooltipArrowClass: {
      color: theme.palette.primary.main,
    },
    tooltipClassForLanguagesUsed: {
      background: theme.palette.primary.main,
      color: "black",
      fontSize: theme.font.size.small,
    },
    projectsWrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
    },
    projectsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    projectsArrowButton: {
      width: "20px",
      height: "20px",
      padding: "10px",
      background: "white",
      color: "black",
      borderRadius: "50%",
      marginRight: "-50px",
      cursor: "pointer",
      zIndex: 1,
    },
    motionAnimationContainer: {
      width: "80vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    motionAnimationDiv: {
      marginBottom: "20px",
      fontSize: "40px",
      fontWeight: "bold",
      position: "relative",
      overflow: "hidden",
    },
    projectsImageHeaderBar: {
      width: "5px",
      height: "100px",
      background: "black",
      position: "absolute",
      transform: "rotate(45deg)",
      marginTop: "-25px",
      marginLeft: "-50px",
      animation: "$moveTheBar 5s linear 2s infinite alternate",
    },
    motionDiv2: {
      width: "50vw",
      height: "25vw",
      backgroundSize: "cover",
      borderRadius: "8px",
      boxShadow: "rgb(126 120 120 / 40%) 7px 7px 29px 0px",
    },
    motionP: {
      margin: "20px 0px 20px 0px",
      fontSize: theme.font.size.medium,
      textAlign: "center",
    },
    motionP2: {
      marginBottom: "20px",
      fontSize: theme.font.size.medium,
      display: "flex",
      alignItems: "center",
    },
    languageUsedWrapper: {
      padding: "5px 5px",
      background: "white",
      borderRadius: "4px",
      color: "black",
      fontWeight: "bold",
      fontSize: "12px",
      position: "relative",
    },
    languageUsedContainer: {
      width: "10px",
      height: "10px",
      background: "white",
      transform: "rotate(45deg)",
      position: "absolute",
      marginLeft: "90px",
      marginTop: "2.5px",
      borderBottomLeftRadius: "50%",
    },
    indexDivider: {
      width: "10px",
      height: "3px",
      border: "0px",
      background: "white",
      borderRadius: "6px",
      margin: "0px 6px",
    },
    motionImage: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
    },
    motionForwardIcon: {
      width: "20px",
      height: "20px",
      padding: "10px",
      background: "white",
      color: "black",
      borderRadius: "50%",
      marginLeft: "-50px",
      cursor: "pointer",
      zIndex: 1,
    },
    motionProjectInformationContainer: {
      display: "flex",
      alignItems: "center",
    },
    "@keyframes moveTheBar": {
      from: {
        marginLeft: "-50px",
      },
      to: {
        marginLeft: "300px",
      },
    },
  };
});
const Projects = () => {
  const classes = useStyles();
  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = wrap(0, projectsImages.length, page);
  const swipeConfidenceThreshold = 10000;

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
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  return (
    <div className={classes.projectsWrapper}>
      <div className={classes.projectsContainer}>
        <ArrowBackIcon
          onClick={() => paginate(-1)}
          className={classes.projectsArrowButton}
        />
        <AnimatePresence initial={false} custom={direction}>
          <div className={classes.motionAnimationContainer}>
            <motion.div
              key={ProjectsInformation[imageIndex].headerLabel}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className={classes.motionAnimationDiv}
            >
              <div className={classes.projectsImageHeaderBar}></div>
              {ProjectsInformation[imageIndex].headerLabel}
            </motion.div>
            <a
              href={ProjectsInformation[imageIndex].link}
              target={"_blank"}
              className={"scaleTheElement"}
              rel="noreferrer"
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
                className={classes.motionDiv2}
                style={{
                  backgroundImage: `url(${projectsImages[imageIndex]})`,
                }}
              />
            </a>

            <motion.p
              key={ProjectsInformation[imageIndex].about}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className={classes.motionP}
            >
              {ProjectsInformation[imageIndex].about}
            </motion.p>
            <motion.p
              key={ProjectsInformation[imageIndex].languagesUsed.key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              className={classes.motionP2}
            >
              <div className={classes.languageUsedWrapper}>
                <div className={classes.languageUsedContainer}></div>
                Languages Used
              </div>

              {ProjectsInformation[imageIndex].languagesUsed.images.map(
                (eachImage, index) => {
                  return (
                    <div
                      key={eachImage}
                      style={{
                        marginLeft: index === 0 ? "20px" : "",
                      }}
                      className={classes.motionProjectInformationContainer}
                    >
                      {index ? (
                        <div className={classes.indexDivider}></div>
                      ) : null}

                      <Tooltip
                        title={
                          ProjectsInformation[imageIndex].languagesUsed.labels[
                            index
                          ]
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
                          className={classes.motionImage}
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
          className={classes.motionForwardIcon}
        />
      </div>
    </div>
  );
};
export default Projects;
