import { takeLatest, put, call } from "redux-saga/effects";
import { UPDATE_ENTIRE_RESUME } from "../actions/types";
import { updateEntireResume } from "../actions/index";
import { updateEntireResume as updateEntireResumeApi } from "../graphql";

function* updateEntireResumeSagaGen({ payload }) {
  const { updatedResumeDetails } = payload;
  function removeTypename(obj) {
    if (Array.isArray(obj)) {
      return obj.map(removeTypename);
    } else if (obj && typeof obj === "object") {
      const { __typename, ...rest } = obj;
      return Object.fromEntries(
        Object.entries(rest).map(([key, value]) => [key, removeTypename(value)])
      );
    }
    return obj;
  }
  try {
    const sanitizedData = removeTypename(updatedResumeDetails);
    console.log({ sanitizedData });
    const { error, message } = yield call(updateEntireResumeApi, {
      input: sanitizedData,
    });
    console.log({ message });
    if (!error) {
      yield put(updateEntireResume.success({}));
    }
  } catch (err) {
    updateEntireResume.error({
      message: err.message,
    });
  }
}

export default function* updateEntireResumeSaga() {
  yield takeLatest(UPDATE_ENTIRE_RESUME, updateEntireResumeSagaGen);
}
