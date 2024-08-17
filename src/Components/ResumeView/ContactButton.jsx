import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonView: {
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
    fontWeight: 600,
    padding: "4px 15px !important",
    fontSize: "10px",
    boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
    cursor: "pointer",
    "&.Mui-disabled": {
      background: `${theme.palette.background.paper} !important`,
      color: theme.palette.primary.main,
      opacity: 0.8,
      cursor: "none",
    },
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
