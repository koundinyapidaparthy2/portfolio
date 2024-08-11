import { combineReducers } from "redux";

import confettiReducer from "./confettiReducer";

const rootReducer = combineReducers({
  confetti: confettiReducer,
});

export default rootReducer;
