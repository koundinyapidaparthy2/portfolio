import { INIT_APP, INIT_APP_SUCCESS } from "../actions/types";
import { fromJS } from "immutable";
import { setInitApp } from "../selectors";
const initialState = fromJS({
  loading: false,
  personalDetails: {},
});

const initApp = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_APP:
      return setInitApp(state, { loading: true });
    case INIT_APP_SUCCESS:
      return setInitApp(state, {
        personalDetails: payload.personalDetails,
        loading: false,
      });
    default:
      return state;
  }
};

export default initApp;
