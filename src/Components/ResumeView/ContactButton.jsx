import React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  buttonView: {
    ...((theme || {}).commonStyles || {}).buttonVariant1,
  },
  rounded: {
    borderRadius: "10px",
    padding: "5px !important",
    width: "30px !important",
    height: "30px !important",
    minWidth: "0px",
  },
  download: {
    position: "fixed",
    bottom: "107px",
    left: "5px",
  },
  phone: {
    position: "fixed",
    bottom: "72px",
    left: "5px",
  },
  email: {
    position: "fixed",
    bottom: "38px",
    left: "5px",
  },
  linkedin: {
    position: "fixed",
    bottom: "5px",
    left: "5px",
  },
  linkIcon: {
    marginTop: "3px",
    marginLeft: "1px",
  },
}));

const ContactButtons = () => {
  const classes = useStyles();

  return (
    <>
      <Tooltip title={<span>Download Resume</span>} arrow placement={"top"}>
        <Link
          href={"./Koundinya_Pidaparthy_Resume.pdf"}
          download={"Koundinya_Pidaparthy.pdf"}
        >
          <Button
            className={
              classes.buttonView +
              " " +
              classes.download +
              " " +
              classes.rounded
            }
          >
            <GetAppRoundedIcon color="primary" className={classes.linkIcon} />
          </Button>
        </Link>
      </Tooltip>
      <Button
        className={
          classes.buttonView + " " + classes.phone + " " + classes.rounded
        }
      >
        <Link href={"tel:+15512298660"}>
          <PhoneRoundedIcon color="primary" className={classes.linkIcon} />
        </Link>
      </Button>
      <Button
        className={
          classes.buttonView + " " + classes.email + " " + classes.rounded
        }
      >
        <Link href={"mailto:kp10566n@pace.edu"}>
          <EmailRoundedIcon color="primary" className={classes.linkIcon} />
        </Link>
      </Button>
      <Button
        className={
          classes.buttonView + " " + classes.linkedin + " " + classes.rounded
        }
      >
        <Link href={"https://www.linkedin.com/in/koundinyap/"} target="_blank">
          <LinkedInIcon color="primary" className={classes.linkIcon} />
        </Link>
      </Button>
    </>
  );
};

export default ContactButtons;
