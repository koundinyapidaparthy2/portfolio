import { all, fork } from "redux-saga/effects";
import confetti from "./confetti";
import initApp from "./initApp";
import activateTrack from "./activateTrack";
import eventTracking from "./eventTracking";
import updateEntireResume from "./updateEntireResume";
import getUserLoginToken from "./getUserLoginToken";
const sagas = [
  confetti,
  initApp,
  activateTrack,
  eventTracking,
  updateEntireResume,
  getUserLoginToken,
];
export default function* rootSaga() {
  yield all(sagas.map((each) => fork(each)));
}
