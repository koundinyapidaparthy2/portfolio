import { ACTIVATE_ANALYTICS_SUCCESS } from "../actions/types";
import { fromJS } from "immutable";
import { setActivateTrackToken, setActivateTrackUserMeta } from "../selectors";

const initialState = fromJS({
  userDetails: {},
  trackerToken: "",
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
