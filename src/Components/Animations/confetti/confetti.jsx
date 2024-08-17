import React from "react";

import Confetti from "react-confetti";

const ConfettiAnimation = ({ trigger }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {trigger && (
        <Confetti
          width={windowWidth}
          height={windowHeight}
          numberOfPieces={200}
          recycle={false}
        />
      )}
    </>
  );
};

export default ConfettiAnimation;
