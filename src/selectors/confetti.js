import { createSelector } from "reselect";
export const setConfettiTrigger = (state, payload) => {
  return state.setIn(["trigger"], payload);
};
export const getConfettiTrigger = createSelector(
  (state) => state.getIn(["trigger"], false),
  (trigger) => trigger
);
