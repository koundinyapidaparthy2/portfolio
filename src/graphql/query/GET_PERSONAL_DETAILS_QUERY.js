import { gql } from "@apollo/client";

const GET_PERSONAL_DETAILS_QUERY = gql`
  query {
    getPersonalDetails {
      contactNumber
      contactEmail
      altEmail
      linkedinLink
      githubLink
      portfolioLink
      mypersonalDetails {
        text
        href
        preText
        target
      }
      education {
        university
        studied
        gpa
        graduationDate
        location
      }
      experience {
        companyName
        location
        role
        date
        points
        otherRoles {
          location
          role
          date
          points
        }
      }
      skills {
        title
        Skills
      }
      projects {
        name
        Stack
        date
        points
        website {
          url
          text
        }
        github {
          text
          url
        }
      }
    }
  }
`;

export default GET_PERSONAL_DETAILS_QUERY;
