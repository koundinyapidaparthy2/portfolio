import React from "react";
import { connect } from "react-redux";
import PersonalInfo from "./PersonalInfo";
import { getInitAppLoading, getPersonalDetails } from "../../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { mypersonalDetails } = getPersonalDetails(state) || {};
  return {
    loading,
    mypersonalDetails,
  };
};

export default connect(stateProps)(PersonalInfo);
