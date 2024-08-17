import * as types from "./types";
function createAction(actionName) {
  return {
    pending: (payload) => ({
      type: `${actionName}`,
      payload,
    }),
    success: (payload) => ({
      type: `${actionName}_SUCCESS`,
      payload,
    }),
    error: (error) => ({
      type: `${actionName}_ERROR`,
      error,
    }),
  };
}

export const confettiAction = createAction(types.CONFETTI_ANIMATION);
export const initAppAction = createAction(types.INIT_APP);
export const activateAnalytics = createAction(types.ACTIVATE_ANALYTICS);
export const trackAnalytics = createAction(types.TRACK_ANALYTICS);
