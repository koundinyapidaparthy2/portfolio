import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form";
import confetti from "./confetti";
import initApp from "./initApp";
import activateTrack from "./activateTrack";
const reducers = {
  confetti,
  initApp,
  activateTrack,
};

const rootReducer = combineReducers({
  ...reducers,
  form: formReducer,
});

export default rootReducer;
