import React from "react";
import { connect } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import { getInitAppLoading, getPersonalDetails } from "../../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { contactNumber, contactEmail, altEmail, linkedinLink, githubLink } =
    getPersonalDetails(state) || {};
  return {
    contactNumber,
    contactEmail,
    altEmail,
    linkedinLink,
    githubLink,
    loading,
  };
};

export default connect(stateProps)(PersonalInfo);
