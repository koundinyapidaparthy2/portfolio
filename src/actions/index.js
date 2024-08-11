import * as types from "./types";
function createAction(actionName) {
  return {
    pending: () => ({
      type: `${actionName}`,
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
