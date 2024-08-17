import { all, fork } from "redux-saga/effects";
import confetti from "./confetti";
import initApp from "./initApp";
const sagas = [confetti, initApp];
export default function* rootSaga() {
  yield all(sagas.map((each) => fork(each)));
}
