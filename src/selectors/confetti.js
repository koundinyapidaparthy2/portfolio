import { createSelector } from "reselect";
export const setConfettiTrigger = (state, payload) => {
  return state.setIn(["trigger"], payload);
};
export const getConfettiTrigger = createSelector(
  (state) => {
    console.log(state);
    return state.getIn(["trigger"], false);
  },
  (trigger) => trigger
);
