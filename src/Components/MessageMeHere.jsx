import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import Dialog from "@material-ui/core/Dialog";
import GitHub from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
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
const MessageMeHere = () => {
  const classes = useStyles();
  const [openModal, setModalOpen] = React.useState(false);
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
            <Grid container direction="column" spacing={1}>
              <Grid item xs={12}>
                <strong>Phone:</strong> &nbsp;
                <a href="tel:+919381802188" className={classes.anchorElement}>
                  <LocalPhoneIcon className={classes.anchorIcons} /> +91
                  9381802188
                </a>
              </Grid>
              <Grid item xs={12}>
                <strong>Alt No:</strong> &nbsp;
                <a href="tel:+919676787223" className={classes.anchorElement}>
                  <LocalPhoneIcon className={classes.anchorIcons} />{" "}
                  +919676787223
                </a>
              </Grid>
              <Grid item xs={12}>
                <strong>Email:</strong> &nbsp;
                <a
                  href="mailto: koundinya511@gmail.com"
                  className={classes.anchorElement}
                >
                  <EmailIcon
                    className={classes.anchorIcons + " " + classes.emailIcon}
                  />
                  koundinya511@gmail.com
                </a>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={16} wrap="nowrap">
                  <Grid item xs={4}>
                    <a
                      href="https://www.linkedin.com/in/koundinyap/"
                      className={classes.anchorElement}
                    >
                      <LinkedInIcon
                        className={
                          classes.anchorIcons + " " + classes.emailIcon
                        }
                      />
                      LinkedIn
                    </a>
                  </Grid>
                  <Grid item xs={4}>
                    <a
                      href="https://github.com/koundinyapidaparthy/"
                      className={classes.anchorElement}
                    >
                      <GitHub
                        className={
                          classes.anchorIcons + " " + classes.emailIcon
                        }
                      />
                      Github
                    </a>
                  </Grid>
                  <Grid item xs={4}>
                    <a
                      href="https://www.instagram.com/_.koundinya/"
                      className={classes.anchorElement}
                    >
                      <InstagramIcon
                        className={
                          classes.anchorIcons + " " + classes.emailIcon
                        }
                      />
                      Instagram
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
