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
              backgroundImage: `url(${physique1})`,
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
              backgroundImage: `url(${physique2})`,
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
  );
};

export default Interests;
