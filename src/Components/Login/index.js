import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Login from "./Login";
import { getUserLoginToken } from "../../actions";
const stateProps = (state, ownprops) => {
  return {
    ...ownprops,
  };
};

const mapStateProps = (dispatch) =>
  bindActionCreators(
    {
      getUserLoginToken,
    },
    dispatch
  );

export default connect(stateProps, mapStateProps)(Login);
