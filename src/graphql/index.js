import * as Query from "./query";
import * as Mutation from "./mutation";
import client from "../apollo";
import { call } from "redux-saga/effects";

export function* getPersonalDetails() {
  const { data } = yield call([client, client.query], {
    query: Query.GET_PERSONAL_DETAILS_QUERY,
  });
  return data.getPersonalDetails;
}

export function* updateEntireResume(payload) {
  console.log({ payload });
  const { data } = yield call([client, client.mutate], {
    mutation: Mutation.UPDATE_ENTIRE_RESUME_MUTATION,
    variables: payload,
  });
  return data.updateEntireResume;
}
