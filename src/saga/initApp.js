import { takeLatest, put, call } from "redux-saga/effects";
import { INIT_APP } from "../actions/types";
import { initAppAction } from "../actions/index";
import { getPersonalDetails } from "../graphql";

function* triggerInitSaga() {
  try {
    const personalDetails = yield call(getPersonalDetails);
    console.log({ personalDetails });
    if (personalDetails) {
      yield put(
        initAppAction.success({
          personalDetails,
        })
      );
    }
  } catch (err) {
    initAppAction.error({
      message: err.message,
    });
  }
}

export default function* initAppSaga() {
  yield takeLatest(INIT_APP, triggerInitSaga);
}
