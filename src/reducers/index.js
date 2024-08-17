import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form";
import confetti from "./confetti";
import initApp from "./initApp";
const reducers = {
  confetti,
  initApp,
};

const rootReducer = combineReducers({
  ...reducers,
  form: formReducer,
});

export default rootReducer;
