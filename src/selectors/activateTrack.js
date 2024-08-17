import { createSelector } from "reselect";
export const setActivateTrackToken = (state, payload) => {
  return state.setIn(["trackerToken"], payload);
};
export const getActivateTrackToken = createSelector(
  (state) => state.getIn(["activateTrack", "trackerToken"], false),
  (trigger) => trigger
);

export const setActivateTrackUserMeta = (state, payload) => {
  return state.setIn(["meta"], payload);
};
export const getActivateTrackUserMeta = createSelector(
  (state) => state.getIn(["activateTrack", "meta"], false),
  (trigger) => trigger
);
