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
export function* getUserLoginToken(payload) {
  const { data } = yield call([client, client.query], {
    query: Query.GET_USER_LOGIN_TOKEN_QUERY,
    variables: payload,
  });
  return data.getUserLoginToken;
}

export function* updateEntireResume(payload) {
  const { data } = yield call([client, client.mutate], {
    mutation: Mutation.UPDATE_ENTIRE_RESUME_MUTATION,
    variables: payload,
  });
  return data.updateEntireResume;
}

export function* createSessionToken(payload) {
  const { data } = yield call([client, client.mutate], {
    mutation: Mutation.CREATE_SESSION_TOKEN_MUTATION,
    variables: payload,
  });
  return data.createSessionToken;
}

export function* trackSessionToken(payload) {
  const { data } = yield call([client, client.mutate], {
    mutation: Mutation.TRACK_SESSION_TOKEN_MUTATION,
    variables: payload,
  });
  return data.trackSessionToken;
}
