import { combineReducers } from "redux-immutable";
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
});

export default rootReducer;
