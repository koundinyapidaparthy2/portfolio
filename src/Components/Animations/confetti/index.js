import React from "react";
import Confetti from "./confetti";
import { connect } from "react-redux";
import { getConfettiTrigger } from "../../../selectors";
const stateProps = (state) => {
  return {
    trigger: getConfettiTrigger(state),
  };
};

export default connect(stateProps)(Confetti);
