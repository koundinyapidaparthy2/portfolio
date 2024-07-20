import React from "react";
import Grid from "@material-ui/core/Grid";
import PeronalImage1 from "../Images/PeronalImage1.jpg";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core//styles";
import Link from "@material-ui/core/Link";
import {
  myExperienceData,
  mySkills,
  mypersonalDetails,
  myProjects,
} from "../data";
import { useNavigate } from "react-router-dom";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import Tooltip from "@material-ui/core/Tooltip";

const styles = makeStyles((theme) => {
  return {
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
    pdfViewCOntainer: {
      height: "99.5vh",
      overflowY: "scroll",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-media-controls-panel": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
      "&::-webkit-media-controls-play-button": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
      "&::-webkit-media-controls-start-playback-button": {
        display: "none!important",
        "-webkit-appearance": "none",
      },
    },
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
    name: {
      backgroundImage: theme.palette.background.default,
      color: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
    },
    navigateHeader: {
      margin: "10px 0px 20px 0px",
    },
    hyperLinkedText: {
      fontWeight: 600,
    },
    hyperLink: {
      color: theme.palette.hyperLink.main,
      backgroundClip: "text",
      fontWeight: "normal",
    },
    textIndent: {
      lineHeight: 1.25,
      fontSize: "14px",
      textIndent: "50px",
    },
    summary: {
      marginTop: "20px",
    },
    titleHeader: {
      backgroundImage: theme.palette.background.paper,
      color: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
      textDecoration: "underline",
    },
    italic: {
      fontStyle: "italic",
      fontSize: "12px",
      lineHeight: 1,
    },
    weighted: {
      fontWeight: 600,
    },
    points: {
      lineHeight: 1.25,
      fontSize: "14px",
    },
    subHeading: {
      fontSize: "14px",
    },
    date: {
      fontStyle: "italic",
      fontSize: "12px",
    },
    skillsHeader: {
      fontSize: "13px",
      marginRight: "4px",
    },
    skillsContent: {
      fontSize: "12px",
      marginRight: "4px",
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
  };
});
const PDFView = () => {
  const classes = styles();
  const navigate = useNavigate();
  function gotToAestheticView() {
    navigate("/");
  }
  return (
    <Grid
      container
      justifyContent="center"
      className={classes.pdfViewCOntainer}
    >
      <Grid item xs={11} sm={11} md={10} lg={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} className={classes.navigateHeader}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.buttonView}
                  disabled
                >
                  PDF VIEW
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.buttonView}
                  onClick={gotToAestheticView}
                >
                  AESTHETIC VIEW
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <img src={PeronalImage1} className={classes.personalImage} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.name} variant="h6" align="center">
              KOUNDINYA PIDAPARTHY
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              {mypersonalDetails.map(({ text, preText, href, target }) => {
                return (
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      align="center"
                      className={preText ? classes.hyperLinkedText : ""}
                    >
                      • {preText}
                      <Link
                        href={href}
                        target={target}
                        underline="none"
                        className={classes.hyperLink}
                      >
                        {text}
                      </Link>
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={11} className={classes.summary}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className={classes.titleHeader}
                    >
                      Summary
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <Typography
                      color="primary"
                      variant="subtitle1"
                      className={classes.textIndent}
                    >
                      With a passion for Full Stack Development, I am a
                      dedicated and versatile creative professional driven by a
                      relentless pursuit of excellence. Equipped with 3.5 years
                      of experience in IT Industry, I have honed my skills in
                      ReactJs, NodeJs, AWS, GCP. My journey in the realm of full
                      stack development has been marked by a commitment to
                      innovation, problem-solving, and collaboration. I thrive
                      in dynamic environments where I can leverage my strengths
                      in web development to deliver impactful solutions. Whether
                      it's Front application development, Backend complex logic,
                      or Payment gateway intergration, I approach each challenge
                      with enthusiasm and a keen eye for detail.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className={classes.titleHeader}
                    >
                      Experience
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <Grid container spacing={2}>
                      {myExperienceData.map(
                        ({ companyName, role, date, points }) => {
                          return (
                            <Grid item xs={12}>
                              <Grid
                                container
                                spacing={1}
                                justifyContent="center"
                              >
                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    justifyContent="space-between"
                                  >
                                    <Grid item>
                                      <Grid
                                        container
                                        spacing={1}
                                        alignItems="center"
                                      >
                                        <Grid item>
                                          <Typography
                                            variant="subtitle2"
                                            className={
                                              classes.weighted +
                                              " " +
                                              classes.subHeading
                                            }
                                          >
                                            {companyName}
                                          </Typography>
                                        </Grid>
                                        <Grid item>
                                          <Typography
                                            variant="subtitle2"
                                            className={classes.italic}
                                          >
                                            - {role}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="subtitle2"
                                        className={
                                          classes.weighted + " " + classes.date
                                        }
                                      >
                                        {date}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={11}>
                                  {points.map((eachPoint) => {
                                    return (
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.points}
                                      >
                                        • {eachPoint}
                                      </Typography>
                                    );
                                  })}
                                </Grid>
                              </Grid>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className={classes.titleHeader}
                    >
                      SKILLS
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <Grid container alignItems="center">
                      {mySkills.map(({ title, Skills }) => {
                        return (
                          <Grid item xs={12}>
                            <Grid container direction="row">
                              <Grid item>
                                <Typography
                                  variant="subtitle2"
                                  className={classes.skillsHeader}
                                >
                                  • {title}:
                                </Typography>
                              </Grid>
                              {Skills.map((value, index) => {
                                if (index === Skills.length - 1) {
                                  return (
                                    <Grid item>
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.skillsContent}
                                      >
                                        {value}.
                                      </Typography>
                                    </Grid>
                                  );
                                }
                                return (
                                  <Grid item>
                                    <Typography
                                      variant="subtitle2"
                                      className={classes.skillsContent}
                                    >
                                      {value},
                                    </Typography>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      className={classes.titleHeader}
                    >
                      PROJECTS
                    </Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <Grid container spacing={2}>
                      {myProjects.map(
                        ({ name, Stack, date, points, website, github }) => {
                          return (
                            <Grid item xs={12}>
                              <Grid
                                container
                                spacing={1}
                                justifyContent="center"
                              >
                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    justifyContent="space-between"
                                  >
                                    <Grid item>
                                      <Grid
                                        container
                                        spacing={1}
                                        alignItems="center"
                                      >
                                        <Grid item>
                                          <Typography
                                            variant="subtitle2"
                                            className={
                                              classes.weighted +
                                              " " +
                                              classes.subHeading
                                            }
                                          >
                                            {name}
                                          </Typography>
                                        </Grid>
                                        <Grid item>
                                          <Typography
                                            variant="subtitle2"
                                            className={classes.italic}
                                          >
                                            - {Stack}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Grid item>
                                      <Typography
                                        variant="subtitle2"
                                        className={
                                          classes.weighted + " " + classes.date
                                        }
                                      >
                                        {date}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={11}>
                                  {points.map((eachPoint) => {
                                    return (
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.points}
                                      >
                                        • {eachPoint}
                                      </Typography>
                                    );
                                  })}
                                </Grid>
                                <Grid item xs={11}>
                                  <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                  >
                                    <Grid item xs={12}>
                                      <Grid
                                        container
                                        direction="row"
                                        alignItems="center"
                                        spacing={1}
                                      >
                                        <Grid item>
                                          <Typography
                                            variant="subtitle2"
                                            className={classes.points}
                                          >
                                            • Website:
                                          </Typography>
                                        </Grid>
                                        <Grid item>
                                          <Link
                                            variant="subtitle2"
                                            href={website.url}
                                            target="_blank"
                                            className={classes.hyperLink}
                                          >
                                            {website.text}
                                          </Link>
                                        </Grid>

                                        {github.map(({ text, url }) => {
                                          return (
                                            <Grid item>
                                              {" "}
                                              <Grid
                                                container
                                                alignItems="center"
                                              >
                                                <Grid item>
                                                  <Typography
                                                    variant="subtitle2"
                                                    className={classes.points}
                                                  >
                                                    Github//:
                                                  </Typography>
                                                </Grid>
                                                <Grid item>
                                                  <Link
                                                    variant="subtitle2"
                                                    href={url}
                                                    target="_blank"
                                                    className={
                                                      classes.hyperLink
                                                    }
                                                  >
                                                    {text}
                                                  </Link>
                                                </Grid>
                                              </Grid>
                                            </Grid>
                                          );
                                        })}
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          );
                        }
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Tooltip
        title={<span>Download Resume</span>}
        arrow
        placement={"top"}
        classes={{
          tooltip: classes.tooltipClass,
          arrow: classes.tooltipArrowClass,
        }}
      >
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
    </Grid>
  );
};

export default PDFView;
