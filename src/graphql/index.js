import * as Query from "./query";
import client from "../apollo";
import { call } from "redux-saga/effects";

export function* getPersonalDetails() {
  const { data } = yield call([client, client.query], {
    query: Query.GET_PERSONAL_DETAILS_QUERY,
  });
  return data.getPersonalDetails;
}
