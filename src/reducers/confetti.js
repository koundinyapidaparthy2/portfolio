import {
  CONFETTI_ANIMATION,
  CONFETTI_ANIMATION_SUCCESS,
} from "../actions/types";
import { fromJS } from "immutable";
import { setConfettiTrigger } from "../selectors";

const initialState = fromJS({
  trigger: false,
});

const confetti = (state = initialState, { type }) => {
  switch (type) {
    case CONFETTI_ANIMATION:
      return setConfettiTrigger(state, true);
    case CONFETTI_ANIMATION_SUCCESS:
      return setConfettiTrigger(state, false);
    default:
      return state;
  }
};

export default confetti;
