import { gql } from "@apollo/client";

const CREATE_SESSION_TOKEN_MUTATION = gql`
  mutation CreateSessionToken($data: SessionInput) {
    createSessionToken(data: $data) {
      token
    }
  }
`;

export default CREATE_SESSION_TOKEN_MUTATION;
