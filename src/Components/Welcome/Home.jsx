import React from "react";
import PersonalImage from "../../Images/PersonalImage.jpg";
import "../../index.css";
const Home = ({ mainAnimations }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: `calc(${window.innerHeight}px - 100px)`,
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
  );
};

export default Home;
