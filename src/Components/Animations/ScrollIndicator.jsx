import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const useStyles = makeStyles((theme) => ({
  scrollIndicator: {
    position: "fixed",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    cursor: "pointer",
    zIndex: 3,
    transition: "opacity 0.3s ease",
    animation: "$bounce 1.5s infinite",
  },
  hidden: {
    opacity: 0,
    pointerEvents: "none",
  },
  expandMoreIcon: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  "@keyframes bounce": {
    "0%, 100%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-15px)",
    },
  },
}));

const ScrollIndicator = ({ hidden, moveToTheElement }) => {
  const classes = useStyles();

  const handleScroll = () => {
    moveToTheElement(2);
  };

  return (
    <div
      className={`${classes.scrollIndicator} ${hidden ? classes.hidden : ""}`}
      onClick={handleScroll}
    >
      <ExpandMoreIcon fontSize="medium" className={classes.expandMoreIcon} />
    </div>
  );
};

export default ScrollIndicator;
