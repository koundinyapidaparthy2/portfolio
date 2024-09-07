import { gql } from "@apollo/client";

const GET_USER_LOGIN_TOKEN_QUERY = gql`
  query getUserLoginToken($userName: String!, $password: String!) {
    getUserLoginToken(userName: $userName, password: $password) {
      message
      error
    }
  }
`;

export default GET_USER_LOGIN_TOKEN_QUERY;
