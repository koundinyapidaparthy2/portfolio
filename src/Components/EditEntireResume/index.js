import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditResume from "./EditResume";
import { getPersonalDetails, getInitAppLoading } from "../../selectors";
const stateProps = (state) => {
  const personalDetails = getPersonalDetails(state);
  const loading = getInitAppLoading(state);
  return {
    initialValues: {
      contactDetails: {
        contactNumber: personalDetails.contactNumber || "",
        contactEmail: personalDetails.contactEmail || "",
        altEmail: personalDetails.altEmail || "",
        linkedinLink: personalDetails.linkedinLink || "",
        githubLink: personalDetails.githubLink || "",
        portfolioLink: personalDetails.portfolioLink || "",
      },
      education: personalDetails.education || [],
      experience: personalDetails.experience || [],
      skills: personalDetails.skills || [],
      projects: personalDetails.projects || [],
    },
    loading,
  };
};
const bindActionProps = (dispatch) =>
  bindActionCreators(
    {
      onSubmit: () => {},
    },
    dispatch
  );

export default connect(stateProps, bindActionProps)(EditResume);
