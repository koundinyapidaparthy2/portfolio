import { INIT_APP, INIT_APP_SUCCESS } from "../actions/types";
import { fromJS } from "immutable";
import { setInitAppPersonalData, setInitAppLoading } from "../selectors";
const initialState = fromJS({
  loading: false,
  personalDetails: {},
});

const initApp = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return setInitAppLoading(state, true);
    case INIT_APP_SUCCESS:
      return setInitAppPersonalData(
        setInitAppLoading(state, false),
        payload.personalDetails
      );
    default:
      return state;
  }
};

export default initApp;
