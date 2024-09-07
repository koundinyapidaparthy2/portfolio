import React from "react";
import { connect } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import { getInitAppLoading, getPersonalDetails } from "../../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { moreContactDetails } = getPersonalDetails(state) || {};
  return {
    loading,
    moreContactDetails,
  };
};

export default connect(stateProps)(PersonalInfo);
