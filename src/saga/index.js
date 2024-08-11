import { all, fork } from "redux-saga/effects";
import confettiSaga from "./confettiSaga";

const sagas = [confettiSaga];
export default function* rootSaga() {
  yield all(sagas.map((each) => fork(each)));
}
