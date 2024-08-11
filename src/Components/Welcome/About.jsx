import React from "react";
import HandWave from "../../Images/HandWave.gif";

const About = ({ mainAnimations }) => {
  return (
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
              loading="lazy"
            />
            <div style={{ textAlign: "center" }}>
              I'm a developer. my ideology is to build a web or android app with
              best accessibility and user interface with the help of basic
              funda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
