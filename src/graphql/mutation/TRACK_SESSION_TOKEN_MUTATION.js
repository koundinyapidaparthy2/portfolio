import { gql } from "@apollo/client";

const TRACK_SESSION_TOKEN_MUTATION = gql`
  mutation TrackSessionToken($trackData: TrackSessionInput) {
    trackSessionToken(trackData: $trackData) {
      error
      message
    }
  }
`;

export default TRACK_SESSION_TOKEN_MUTATION;
