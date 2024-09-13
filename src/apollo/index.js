import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const getTokens = () => {
  const token1 = localStorage.getItem("authorization");
  const token2Json = localStorage.getItem("trackerToken");
  const expiry = token2Json ? JSON.parse(token2Json).expiry : null;
  const token2 =
    token2Json && new Date().getTime() < expiry
      ? JSON.parse(token2Json).token
      : null;
  if (new Date().getTime() > expiry) {
    localStorage.removeItem("trackerToken");
  }
  return { token1, token2 };
};

const authLink = setContext((_, { headers }) => {
  const { token1, token2 } = getTokens();
  console.log({ token1, token2 });
  return {
    headers: {
      ...headers,
      authorization: token1 ? `Bearer ${token1}` : "",
      "analytics-token": token2 ? `Bearer ${token2}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_API_URL,
});

const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
