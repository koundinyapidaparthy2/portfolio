import { gql } from "@apollo/client";

const UPDATE_ENTIRE_RESUME_MUTATION = gql`
  mutation UpdateEntireResume($input: ResumeInput!) {
    updateEntireResume(input: $input) {
      message
      error
    }
  }
`;

export default UPDATE_ENTIRE_RESUME_MUTATION;
