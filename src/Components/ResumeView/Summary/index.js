import React from "react";
import { connect } from "react-redux";
import Summary from "./Summary";
import { getInitAppLoading, getPersonalDetails } from "../../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { education, skills, experience, projects } =
    getPersonalDetails(state) || {};
  return {
    loading,
    education,
    skills,
    experience,
    projects,
  };
};

export default connect(stateProps)(Summary);
