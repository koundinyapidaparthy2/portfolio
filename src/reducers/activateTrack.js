import { ACTIVATE_ANALYTICS_SUCCESS } from "../actions/types";
import { fromJS } from "immutable";
import { setActivateTrackToken, setActivateTrackUserMeta } from "../selectors";

const getToken = () => {
  const tokenData = JSON.parse(localStorage.getItem("trackerToken"));
  if (tokenData && tokenData.expiry > new Date().getTime()) {
    return tokenData.token;
  } else {
    localStorage.removeItem("trackerToken");
    return null;
  }
};

const initialState = fromJS({
  userDetails: {},
  trackerToken: getToken(),
});

const confetti = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVATE_ANALYTICS_SUCCESS:
      return setActivateTrackUserMeta(
        setActivateTrackToken(state, payload.trackerToken),
        payload.meta
      );
    default:
      return state;
  }
};

export default confetti;
