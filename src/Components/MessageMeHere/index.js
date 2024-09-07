import { connect } from "react-redux";
import MessageMeHere from "./MessageMeHere";
import { getInitAppLoading, getPersonalDetails } from "../../selectors";
const stateProps = (state) => {
  const loading = getInitAppLoading(state);
  const { personalDetails } = getPersonalDetails(state) || {};
  return {
    loading,
    personalDetails,
  };
};

export default connect(stateProps)(MessageMeHere);
