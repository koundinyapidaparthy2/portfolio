import { all, fork } from "redux-saga/effects";
import confetti from "./confetti";
import initApp from "./initApp";
import activateTrack from "./activateTrack";
const sagas = [confetti, initApp, activateTrack];
export default function* rootSaga() {
  yield all(sagas.map((each) => fork(each)));
}
