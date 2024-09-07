import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";
import PeronalImage1 from "../../../Images/PeronalImage1.jpg";
import Fallback from "../../Fallback";
const useStyles = makeStyles((theme) => ({
  personalImage: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "rgb(126 120 120 / 40%) 0px 0px 29px 0px",
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      height: "120px",
    },
  },
  name: {
    backgroundImage: theme.palette.background.default,
    color: "transparent",
    backgroundClip: "text",
    fontWeight: "bold",
  },
  link: {
    color: "transparent",
    fontWeight: 600,
    marginRight: theme.spacing(2),
    cursor: "pointer",
    textDecoration: "none",
    position: "relative",
    overflow: "hidden",
    display: "inline-block",
    fontSize: theme.font.size.medium,
    background: theme.palette.background.paper,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    transition: "color 0.3s",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "-100%",
      bottom: "-100%",
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.main,
      transform: "skewX(-45deg)",
      transition: "left 0.3s, bottom 0.3s",
      zIndex: 1,
    },
    "&:hover::before": {
      left: "100%",
      bottom: "100%",
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  hyperLinkedText: {
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const PersonalInfo = ({ loading, moreContactDetails }) => {
  const classes = useStyles();
  if (loading) {
    return <Fallback />;
  }
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <img
            src={PeronalImage1}
            className={classes.personalImage}
            alt="Personal"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.name} variant="h6" align="center">
          KOUNDINYA PIDAPARTHY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={2} justifyContent="center">
          {moreContactDetails.map(({ text, preText, href, target }) => (
            <Grid item key={href}>
              <Typography
                variant="subtitle2"
                align="center"
                className={classes.hyperLinkedText}
              >
                {preText ? "• " + preText : ""}
                <Link
                  href={href}
                  target={target}
                  underline="none"
                  className={classes.link}
                >
                  {text}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
