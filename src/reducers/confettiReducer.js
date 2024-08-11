import {
  CONFETTI_ANIMATION,
  CONFETTI_ANIMATION_SUCCESS,
} from "../actions/types";

const initialState = {
  trigger: false,
  animationInProgress: false,
};

const confettiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFETTI_ANIMATION:
      return { ...state, trigger: true };
    case CONFETTI_ANIMATION_SUCCESS:
      return { ...state, trigger: false };
    default:
      return state;
  }
};

export default confettiReducer;
