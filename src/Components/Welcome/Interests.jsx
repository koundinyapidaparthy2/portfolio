import React from "react";
import { makeStyles } from "@mui/styles";
import TravelImage from "../../Images/Travel.jpg";
import physique1 from "../../Images/physique1.jpg";
import physique2 from "../../Images/physique2.jpg";
import FashionImage from "../../Images/Fashion.jpg";
import HawaMahal from "../../Images/HawaMahel.jpg";
import HawaMahalNight from "../../Images/HawaMahalNight.jpeg";
const useStyles = makeStyles((theme) => {
  return {
    interestWrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      overflow: "scroll",
      position: "relative",
      zIndex: 1,
    },
    intersetContianer: {
      height: "95vh",
      width: "95%",
      overflowX: "hidden",
      position: "relative",
      scrollBehavior: "smooth",
    },
    fashionCard1Wrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      position: "relative",
    },
    fashionCard1: {
      borderRadius: "8px",
      backgroundImage: `url(${FashionImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    fashionCardInnerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    fashionCardInnerContainerCard: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
    fashionCardInnerContainerCardText: {
      fontSize: "40px",
      fontWeight: "bold",
      marginTop: "20px",
    },
    fashionCardInnerContainerCardSecondaryText: {
      textAlign: "center",
    },
    fashionCard2: {
      borderRadius: "8px",
      backgroundImage: `url(${TravelImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    fashionCard3Wrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      position: "relative",
    },
    fashionCard3Container: {
      borderRadius: "8px",
      backgroundImage: `url(${HawaMahal})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    fashionCard3: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    fashionCard3InnerGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
    fashionCard3InnerGridText: {
      fontSize: "40px",
      fontWeight: "bold",
      marginTop: "20px",
    },
    fashionCard3InnerGridSecondaryText: {
      textAlign: "center",
    },
    fashionCard4: {
      width: "15vw",
      height: "40.5vh",
      borderRadius: "8px",
      backgroundImage: `url(${HawaMahalNight})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    fashionCard5Wrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      position: "relative",
    },
    fashionCard5Container: {
      width: "15vw",
      height: "200px",
      borderRadius: "8px",
      backgroundImage: `url(${physique1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    fashionCard5: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    fashionCard5InnerGrid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
    fashionCard5InnerGridText: {
      fontSize: "40px",
      fontWeight: "bold",
    },
    fashionCard5InnerGridSecondaryText: {
      textAlign: "center",
    },
    fashionCard6: {
      width: "15vw",
      height: "200px",
      borderRadius: "8px",
      backgroundImage: `url(${physique2})`,
      backgroundSize: "cover",
      backgroundPosition: "right",
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
const Interests = ({ scrollChildElementNow }) => {
  const classes = useStyles();
  const eventInnerWidth = window.innerWidth;

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
  return (
    <div className={classes.interestWrapper + " " + classes.scrollGridItem}>
      <div
        style={{
          overflowY: scrollChildElementNow ? "scroll" : "hidden",
        }}
        onScroll={interestDivScroll}
        className={classes.intersetContianer + " " + classes.scrollGridItem}
      >
        <div
          style={{
            opacity: interestStateData.fashion.opacity || 1,
            ...(eventInnerWidth < 760
              ? {
                  flexDirection: "column",
                }
              : {
                  height: "60vh",
                }),
          }}
          className={classes.fashionCard1Wrapper}
        >
          <div
            id={"fashionCard1"}
            style={{
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
            className={classes.fashionCard1}
          />
          <div className={classes.fashionCardInnerContainer}>
            <div
              id={"card"}
              style={{
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
              className={classes.fashionCardInnerContainerCard}
            >
              <div
                style={{
                  ...(eventInnerWidth < 760 ? {} : { marginTop: "15vh" }),
                }}
                className={classes.fashionCardInnerContainerCardText}
              >
                Fashion
              </div>
              <p className={classes.fashionCardInnerContainerCardSecondaryText}>
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
            className={classes.fashionCard2}
            style={{
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
            opacity: interestStateData.photography.opacity || 1,
            ...(eventInnerWidth < 760
              ? {
                  flexDirection: "column",
                }
              : {
                  height: "60vh",
                }),
          }}
          className={classes.fashionCard3Wrapper}
        >
          <div
            id={"card"}
            style={{
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
            className={classes.fashionCard3Container}
          />
          <div className={classes.fashionCard3}>
            <div
              id={"card"}
              style={{
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
              className={classes.fashionCard3InnerGrid}
            >
              <div className={classes.fashionCard3InnerGridText}>
                Photography
              </div>
              <p className={classes.fashionCard3InnerGridSecondaryText}>
                I like mobile photography a lot.
                <br />
                It makes my mind more color full and creative 👀.
              </p>
              <p></p>
            </div>
          </div>

          <div
            id={"card"}
            className={classes.fashionCard4}
            style={{
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
          className={classes.fashionCard5Wrapper}
          style={{
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
            className={classes.fashionCard5Container}
            style={{
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
          <div className={classes.fashionCard5}>
            <div
              id={"card"}
              className={classes.fashionCard5InnerGrid}
              style={{
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
                className={classes.fashionCard5InnerGridText}
                style={{
                  ...(eventInnerWidth < 760 ? {} : { marginTop: "15vh" }),
                }}
              >
                Fitness
              </div>
              <p className={classes.fashionCard5InnerGridSecondaryText}>
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
            className={classes.fashionCard6}
            style={{
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
  );
};

export default Interests;
