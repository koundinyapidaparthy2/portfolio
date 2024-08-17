import { createSelector } from "reselect";
export const setConfettiTrigger = (state, payload) => {
  return state.setIn(["trigger"], payload);
};
export const getConfettiTrigger = createSelector(
  (state) => state.getIn(["confetti", "trigger"], false),
  (trigger) => trigger
);
