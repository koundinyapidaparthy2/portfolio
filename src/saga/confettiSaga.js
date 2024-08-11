import { takeLatest, put } from "redux-saga/effects";
import { CONFETTI_ANIMATION } from "../actions/types";
import { confettiAction } from "../actions/index";

function* triggerConfettiSaga() {
  yield new Promise((resolve) => setTimeout(resolve, 3000));
  yield put(confettiAction.success({}));
}

export default function* confettiSaga() {
  yield takeLatest(CONFETTI_ANIMATION, triggerConfettiSaga);
}
