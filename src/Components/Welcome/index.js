import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { confettiAction, trackAnalytics } from "../../actions";
import Welcome from "./Welcome";

const stateProps = () => {};
const bindActionProps = (dispatch) =>
  bindActionCreators(
    {
      confettiAction: confettiAction.pending,
      trackAnalytics: trackAnalytics.pending,
    },
    dispatch
  );

export default connect(stateProps, bindActionProps)(Welcome);
