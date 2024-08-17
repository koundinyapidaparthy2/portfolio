import { createSelector } from "reselect";
import { List } from "immutable";
export const setInitApp = (state, payload) => {
  return state.setIn(["initData"], payload);
};
export const getInitAppLoading = createSelector(
  (state) => {
    console.log(state);
    return state.getIn(["initData"], List());
  },
  (trigger) => (trigger.toJS() || {}).loading
);

export const getPersonalDetails = createSelector(
  (state) => {
    console.log(state);
    return state.getIn(["initData"], List());
  },
  (trigger) => (trigger.toJS() || {}).personalDetails
);
