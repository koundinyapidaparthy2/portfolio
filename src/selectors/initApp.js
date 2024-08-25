import { createSelector } from "reselect";
import { List } from "immutable";

export const setInitAppLoading = (state, payload) => {
  return state.setIn(["loading"], payload);
};
export const getInitAppLoading = createSelector(
  (state) => state.getIn(["initApp", "loading"], true),
  (trigger) => trigger
);

export const setInitAppPersonalData = (state, payload) => {
  return state.setIn(["personalDetails"], payload);
};
export const getPersonalDetails = createSelector(
  (state) => state.getIn(["initApp", "personalDetails"], List()),
  (personalDetails) => personalDetails
);
