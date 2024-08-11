import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { motion, AnimatePresence } from "framer-motion";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { projectsImages, ProjectsInformation } from "../../data/index.js";
import { wrap } from "popmotion";

const useStyles = makeStyles((theme) => {
  return {
    tooltipArrowClass: {
      color: "white",
    },
    tooltipClassForLanguagesUsed: {
      background: "white",
      color: "black",
      fontSize: "12px",
    },
  };
});
const Projects = ({ mainAnimations }) => {
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
  );
};
export default Projects;
