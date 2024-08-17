import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import Dialog from "@material-ui/core/Dialog";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import Fallback from "../Fallback";

const useStyles = makeStyles(() => {
  return {
    dialogRoot: {
      boxShadow: "0px 0px 23px 5px #009af566",
    },
    textMeOverHere: {
      position: "fixed",
      zIndex: 1,
      left: "20px",
      bottom: "20px",
      borderRadius: "50%",
      backgroundColor: "rgb(0, 147, 233)",
      backgroundImage:
        "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    messageIcon: {
      color: "#ffffff",
      fontSize: "20px",
    },
    anchorElement: {
      textDecoration: "none",
      color: "#ffffff",
      fontSize: "16px",
      fontWeight: "bold",
      width: "max-content",
      textAlign: "center",
    },
    modalHeader: {
      padding: "10px",
      backgroundColor: "rgb(0, 147, 233)",
      backgroundImage:
        "linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
      color: "#ffffff",
    },
    h3Class: {
      margin: "0px 0px 4px 0px",
    },
    anchorIcons: {
      fontSize: "16px",
      color: "#ffffff",
      marginBottom: "-2px",
    },
    emailIcon: {
      marginRight: "4px",
    },
  };
});
const MessageMeHere = ({
  contactNumber,
  contactEmail,
  altEmail,
  linkedinLink,
  githubLink,
  loading,
}) => {
  const classes = useStyles();

  const [openModal, setModalOpen] = React.useState(false);
  if (loading) {
    return <Fallback />;
  }
  return (
    <Fragment>
      <Tooltip
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>Let's talk over here</span>
          </div>
        }
        arrow
        placement={"left"}
        classes={{
          tooltip: classes.tooltipClass,
          arrow: classes.tooltipArrowClass,
        }}
      >
        <Grid
          item
          className={classes.textMeOverHere}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <ChatRoundedIcon className={classes.messageIcon} />
        </Grid>
      </Tooltip>

      <Dialog
        open={openModal}
        onClose={() => {
          setModalOpen(false);
        }}
        fullWidth
        maxWidth="xs"
        classes={{
          paperFullWidth: classes.dialogRoot,
        }}
      >
        <Grid
          container
          direction="column"
          className={classes.modalHeader}
          spacing={32}
        >
          <Grid item>
            <h3 className={classes.h3Class}>Personal Information</h3>
            <Grid container direction="column" spacing={1} wrap="nowrap">
              <Grid item xs={12}>
                <strong>USA Phone:</strong> &nbsp;
                <a
                  href={`tel:+1${contactNumber}`}
                  className={classes.anchorElement}
                  target={"_blank"}
                >
                  <LocalPhoneIcon className={classes.anchorIcons} /> +1
                  {contactNumber}
                </a>
              </Grid>
              <Grid item xs={12}>
                <strong>Email:</strong> &nbsp;
                <a
                  href={`mailto:${contactEmail}`}
                  className={classes.anchorElement}
                  target={"_blank"}
                >
                  <EmailIcon
                    className={classes.anchorIcons + " " + classes.emailIcon}
                  />
                  {contactEmail}
                </a>
              </Grid>
              <Grid item xs={12}>
                <strong>Alt Email:</strong> &nbsp;
                <a
                  href={`mailto: ${altEmail}`}
                  className={classes.anchorElement}
                  target={"_blank"}
                >
                  <EmailIcon
                    className={classes.anchorIcons + " " + classes.emailIcon}
                  />
                  {altEmail}
                </a>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={16}
                  wrap="nowrap"
                  justifyContent="space-between"
                >
                  <Grid item xs={6}>
                    <a
                      href={linkedinLink}
                      className={classes.anchorElement}
                      target={"_blank"}
                    >
                      <LinkedInIcon
                        className={
                          classes.anchorIcons + " " + classes.emailIcon
                        }
                      />
                      LinkedIn
                    </a>
                  </Grid>
                  <Grid item xs={6}>
                    <a
                      href={githubLink}
                      className={classes.anchorElement}
                      target={"_blank"}
                    >
                      <GitHub
                        className={
                          classes.anchorIcons + " " + classes.emailIcon
                        }
                      />
                      Github
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default MessageMeHere;
