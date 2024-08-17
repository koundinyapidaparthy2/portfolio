import { takeLatest, put, call, select } from "redux-saga/effects";
import { TRACK_ANALYTICS } from "../actions/types";
import { trackAnalytics } from "../actions/index";
import { getActivateTrackToken } from "../selectors";

function* trackAnalyticsSaga({ payload }) {
  try {
    const trackerToken = yield select(getActivateTrackToken);
    console.log({ trackerToken, payload });
    const userDetails = {
      ...payload,
    };
    yield put(trackAnalytics.success({}));
  } catch (error) {
    console.log(error);
  }
}

export default function* trackSaga() {
  yield takeLatest(TRACK_ANALYTICS, trackAnalyticsSaga);
}
