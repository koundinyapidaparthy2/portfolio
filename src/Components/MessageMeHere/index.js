import { connect } from "react-redux";
import MessageMeHere from "./MessageMeHere";
import { getInitAppLoading, getPersonalDetails } from "../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { mypersonalDetails } = getPersonalDetails(state) || {};
  return {
    loading,
    mypersonalDetails,
  };
};

export default connect(stateProps)(MessageMeHere);
