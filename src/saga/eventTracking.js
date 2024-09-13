import { takeLatest, put, call, select } from "redux-saga/effects";
import { TRACK_ANALYTICS } from "../actions/types";
import { trackAnalytics } from "../actions/index";
import { getActivateTrackToken } from "../selectors";
import { trackSessionToken as trackSessionTokenApi } from "../graphql";

function* trackAnalyticsSaga({ payload }) {
  try {
    const trackerToken = yield select(getActivateTrackToken);
    const { message, error } = yield call(trackSessionTokenApi, {
      data: {
        ...payload,
      },
    });
    console.log({ payload, trackerToken, message, error });
    yield put(trackAnalytics.success({}));
  } catch (error) {
    trackAnalytics.error({ error });
  }
}

export default function* trackSaga() {
  yield takeLatest(TRACK_ANALYTICS, trackAnalyticsSaga);
}
