import { takeLatest, put, call } from "redux-saga/effects";
import { GET_USER_LOGIN_TOKEN } from "../actions/types";
import { updateEntireResume } from "../actions/index";
import { getUserLoginToken as getUserLoginTokenApi } from "../graphql";

function* getUserLoginTokenSagaGen({ payload }) {
  const { userName, password } = payload;
  try {
    const { error, message } = yield call(getUserLoginTokenApi, {
      userName,
      password,
    });
    if (!error) {
      yield put(updateEntireResume.success({}));
    }
  } catch (err) {
    updateEntireResume.error({
      message: err.message,
    });
  }
}

export default function* getUserLoginTokenSaga() {
  yield takeLatest(GET_USER_LOGIN_TOKEN, getUserLoginTokenSagaGen);
}
