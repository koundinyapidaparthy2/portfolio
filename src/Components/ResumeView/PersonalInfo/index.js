import React from "react";
import { connect } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import { getInitAppLoading, getPersonalDetails } from "../../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { personalDetails } = getPersonalDetails(state) || {};
  return {
    loading,
    personalDetails,
  };
};

export default connect(stateProps)(PersonalInfo);
